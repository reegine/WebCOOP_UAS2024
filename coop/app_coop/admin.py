from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

class CustomUserAdmin(UserAdmin):
    model = CustomUser 
    list_display = ('email', 'name', 'phone_number', 'gender', 'major', 'classroom', 'generation', 'is_active', 'is_staff', 'role')
    list_filter = ('is_active', 'is_staff', 'role')
    search_fields = ('email', 'name', 'nim')
    ordering = ('email',) 

    fieldsets = (
        (None, {
            'fields': ('email', 'name', 'nim', 'phone_number', 'gender', 'major', 
                       'classroom', 'generation', 'personal_email', 'status', 
                       'file_sptjm', 'file_proof_consultation', 'profile_image', 
                       'is_active', 'is_staff', 'role')
        }),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'name', 'password1', 'password2', 'is_active', 'is_staff', 'role'),
        }),
    )

    def save_model(self, request, obj, form, change):
        super().save_model(request, obj, form, change)

admin.site.register(CustomUser , CustomUserAdmin)