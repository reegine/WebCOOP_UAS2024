# Generated by Django 5.1.1 on 2024-11-19 08:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_coop', '0002_mentor_rename_nim_confirmationstatus_user_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='mentor',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.DeleteModel(
            name='Mentor',
        ),
    ]
