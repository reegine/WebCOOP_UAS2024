from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('mahasiswa', 'Mahasiswa'),
    ]

    email = models.EmailField(_('email address'), unique=True)
    name = models.CharField(max_length=100, blank=True)
    nim = models.CharField(max_length=100, blank=True)
    phone_number = models.CharField(max_length=15, blank=True)
    mentor = models.CharField(max_length=100, blank=True, null=True)
    gender = models.CharField(
        max_length=20, 
        choices=[
            ('male', 'Laki-Laki'),
            ('female', 'Perempuan'),
        ]
    )    
    major = models.CharField(max_length=100, blank=True)
    classroom =  models.CharField(max_length=100, blank=True)
    generation = models.PositiveIntegerField(blank=True, null=True)
    personal_email = models.EmailField(blank=True)
    status = models.CharField(max_length=100, blank=True)
    file_sptjm = models.FileField(upload_to='document/sptjm/', blank=True)
    file_proof_consultation = models.FileField(upload_to='document/proof_consultation/', blank=True)
    profile_image = models.FileField(upload_to='image/profile_image/', blank=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def _str_(self):
        return self.email
    
class Interview(models.Model):
    id_intv = models.AutoField(primary_key=True)
    position = models.CharField(max_length=255)
    email = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='interviews_by_email')
    nim = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='interviews_by_nim')
    date = models.DateField(blank=False, null=False)  
    time = models.TimeField(blank=False, null=False)
    company_name = models.CharField(max_length=255, blank=True, null=False)
    file_cv = models.FileField(upload_to='document/cv_files/')

    def __str__(self):
        return f"{self.position} - {self.company_name} - {self.time} - {self.date}"



class ReportFileEndTerm(models.Model):
    id_report = models.AutoField(primary_key=True)
    status_program = models.CharField(max_length=255, blank=True, null=True)
    pic_name = models.CharField(max_length=255, blank=True, null=True)
    company_name = models.CharField(max_length=255, blank=True, null=True)
    submitted_at = models.DateTimeField(blank=True, null=True)
    pic_position = models.CharField(max_length=255, blank=True, null=True)
    company_address = models.TextField(blank=True, null=True)
    file_evaluation = models.FileField(upload_to='evaluation_files/', blank=True, null=True)
    file_student_reflection = models.FileField(upload_to='reflection_files/', blank=True, null=True)
    nim = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.company_name} - {self.status_program}"

class ReportFileMidTerm(models.Model):
    id_report = models.AutoField(primary_key=True)
    pic_name = models.CharField(max_length=255, blank=True, null=True)
    company_name = models.CharField(max_length=255, blank=True, null=True)
    pic_position = models.CharField(max_length=255, blank=True, null=True)
    file_evaluation = models.FileField(upload_to='evaluation_files/', blank=True, null=True)
    nim = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.company_name} - {self.nim}"
    
class Notification(models.Model):
    id_notification = models.AutoField(primary_key=True)
    message = models.TextField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.name} - {self.message}"


class WorkList(models.Model):
    id_list = models.AutoField(primary_key=True)
    status = models.CharField(max_length=50)
    description = models.TextField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    nim = models.CharField(max_length=20)  
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.name} - {self.description}"

class ConfirmationStatus(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    # company = models.ForeignKey(xxxxx, on_delete=models.CASCADE) 
    status = models.CharField(
        max_length=20, 
        choices=[
            ('accept', 'Diterima'),
            ('rejected', 'Tidak Diterima'),
            ('review', 'Sedang Ditinjau'),
        ]
    )

    def __str__(self):
        return f"{self.user.name} - {self.status}"

class ConfirmationFile(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, blank=True)
    company_id = models.CharField(max_length=50)
    file_report = models.FileField(upload_to='document/confirmation_reports/')
    intern_type = models.CharField(max_length=50)
    semester = models.CharField(max_length=20)
    mentor_name = models.CharField(max_length=100)
    company_name = models.CharField(max_length=255)
    pic_name = models.CharField(max_length=100)
    pic_position = models.CharField(max_length=100)
    company_address = models.TextField()
    file_proof_confirm = models.FileField(upload_to='document/proof_confirmations/')

    def __str__(self):
        return f"{self.user.nim} - {self.company_name}"