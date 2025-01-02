from django.contrib.auth import authenticate, login as auth_login, logout
from django.shortcuts import render, redirect
from django.contrib import messages
from app_coop.models import *
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.contrib.auth.decorators import login_required


def home(request):
    # if request.user.is_authenticated:
    #     if request.user.role == 'admin':
    #         return redirect('dashboard_admin')
    #     elif request.user.role == 'mahasiswa':
    #         return redirect('dashboard_student')
    return render(request, 'home.html') 

def login_user(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            auth_login(request, user)
            if user.role == 'admin':
                return redirect('dashboard_admin')
            elif user.role == 'mahasiswa':
                return redirect('dashboard_student')
        else:
            # Pass error message to template
            return render(request, 'auth/login.html', {'error': 'Invalid email or password'})
    return render(request, 'auth/login.html')

def register(request):
    return render(request, 'auth/register.html') 

def surat_pengantar_umum(request):
    return render(request, 'surat_pengantar_umum.html') 

def open_career(request):
    return render(request, 'open_career.html') 

def dashboard_student(request):
    return render(request, 'student/dashboard.html') 

def register_input_mahasiswa(request):
    if request.method == 'POST':
        # Collect form data
        email = request.POST.get('email')
        name = request.POST.get('name')
        gender = request.POST.get('gender')
        phone_number = request.POST.get('phone_number')
        major = request.POST.get('major')
        classroom = request.POST.get('classroom')
        generation = request.POST.get('generation')
        personal_email = request.POST.get('personal_email')
        status = request.POST.get('status')
        nim = request.POST.get('nim')
        file_sptjm = request.FILES.get('file_sptjm')
        file_proof_consultation = request.FILES.get('file_proof_consultation')
        profile_image = request.FILES.get('profile_image')
        password = request.POST.get('password')

        # Validation
        errors = {}

        # Check if email already exists
        if CustomUser.objects.filter(email=email).exists():
            errors['email'] = "A user with this email already exists."

        # Validate email format
        try:
            validate_email(email)
        except ValidationError:
            errors['email'] = "Enter a valid email address."

        # Check required fields
        required_fields = {
            'name': name,
            'gender': gender,
            'phone_number': phone_number,
            'major': major,
            'classroom': classroom,
            'generation': generation,
            'personal_email': personal_email,
            'status': status,
            'nim': nim,
            'password': password,
        }
        for field, value in required_fields.items():
            if not value:
                errors[field] = f"{field.replace('_', ' ').capitalize()} is required."

        # Validate file upload fields
        if not file_sptjm:
            errors['file_sptjm'] = "You must upload the SPTJM file."
        if not file_proof_consultation:
            errors['file_proof_consultation'] = "You must upload proof of consultation."

        # If there are errors, return to the form with error messages
        if errors:
            return render(request, 'auth/register_input_mahasiswa.html', {
                'role': 'mahasiswa',
                'errors': errors,
                'form_data': request.POST,  # Return previous data to prefill the form
            })

        # Create user if no errors
        user = CustomUser.objects.create_user(
            email=email,
            password=password,
            name=name,
            gender=gender,
            phone_number=phone_number,
        )
        user.major = major
        user.classroom = classroom
        user.generation = generation
        user.personal_email = personal_email
        user.status = status
        user.nim = nim
        user.file_sptjm = file_sptjm
        user.file_proof_consultation = file_proof_consultation
        user.profile_image = profile_image
        user.role = 'mahasiswa'
        user.save()

        messages.success(request, 'Student account created successfully.')
        return redirect('dashboard_student')

    return render(request, 'auth/register_input_mahasiswa.html', {'role': 'mahasiswa'})

def register_admin(request):
    return render(request, 'auth/register_admin.html') 

@login_required
def logout_view(request):
    logout(request)
    print('User  has logged out')
    messages.success(request, "You have been logged out successfully.")
    return redirect('home')         

def surat_pengantar_input(request):
    return render(request, 'student/surat_pengantar_input.html')
 
def permintaan_mock_intv(request):
    return render(request, 'student/permintaan_mock_intv.html')

def portal_inplace(request):
    return render(request, 'student/portal_inplace.html')

def pengunggahan_cv(request):
    return render(request, 'student/pengunggahan_cv.html')

def konfirmasi_coop(request):
    return render(request, 'student/konfirmasi_coop.html')

def laporan_hasil_magang(request):
    return render(request, 'student/laporan_hasil_magang.html')

def pengunduran_diri_mahasiswa(request):
    return render(request, 'student/pengunduran_diri_mahasiswa.html')

@login_required
def dashboard_admin(request):
    # Get the currently logged-in user
    current_user = request.user
    print('ini yg current user', current_user)

    # Fetch notifications and worklist for the current user
    notifications = Notification.objects.filter(user=current_user)
    worklist = WorkList.objects.filter(user=current_user)

    context = {
        'current_user': current_user,
        'notifications': notifications,
        'worklist': worklist,
    }
    
    return render(request, 'admin/dashboard_admin.html', context)

def daftar_mahasiswa(request):
    return render(request, 'admin/daftar_mahasiswa.html') 

def detail_daftar_mahasiswa(request):
    return render(request, 'admin/detail_daftar_mahasiswa.html') 

def daftar_surat_pengantar(request):
    return render(request, 'admin/daftar_surat_pengantar.html') 

def daftar_mock_intv(request):
    return render(request, 'admin/daftar_mock_intv.html') 

def daftar_inplace(request):
    return render(request, 'admin/daftar_inplace.html') 

def daftar_pengunggahan_cv(request):
    return render(request, 'admin/daftar_pengunggahan_cv.html')

def detail_cv(request):
    return render(request, 'admin/detail_cv.html')

def daftar_konfirmasi_coop(request):
    return render(request, 'admin/daftar_konfirmasi_coop.html')

def daftar_laporan_hasil_magang(request):
    return render(request, 'admin/daftar_laporan_hasil_magang.html')

def daftar_pengunduran_diri(request):
    return render(request, 'admin/daftar_pengunduran_diri.html') 

def daftar_surat_pengantar_detail(request):
    return render(request, 'admin/detail_daftar_surat_pengantar.html') 

def daftar_konfirmasi_coop_detail(request):
    return render(request, 'admin/detail_konfirmasiCOOP.html')

