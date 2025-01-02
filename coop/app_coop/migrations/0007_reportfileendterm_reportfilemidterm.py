# Generated by Django 5.1.1 on 2024-11-19 14:22

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_coop', '0006_alter_confirmationfile_file_proof_confirm_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='ReportFileEndTerm',
            fields=[
                ('id_report', models.AutoField(primary_key=True, serialize=False)),
                ('status_program', models.CharField(blank=True, max_length=255, null=True)),
                ('pic_name', models.CharField(blank=True, max_length=255, null=True)),
                ('company_name', models.CharField(blank=True, max_length=255, null=True)),
                ('submitted_at', models.DateTimeField(blank=True, null=True)),
                ('pic_position', models.CharField(blank=True, max_length=255, null=True)),
                ('company_address', models.TextField(blank=True, null=True)),
                ('file_evaluation', models.FileField(blank=True, null=True, upload_to='evaluation_files/')),
                ('file_student_reflection', models.FileField(blank=True, null=True, upload_to='reflection_files/')),
                ('nim', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ReportFileMidTerm',
            fields=[
                ('id_report', models.AutoField(primary_key=True, serialize=False)),
                ('pic_name', models.CharField(blank=True, max_length=255, null=True)),
                ('company_name', models.CharField(blank=True, max_length=255, null=True)),
                ('pic_position', models.CharField(blank=True, max_length=255, null=True)),
                ('file_evaluation', models.FileField(blank=True, null=True, upload_to='evaluation_files/')),
                ('nim', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
