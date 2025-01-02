from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login_user, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register/', views.register, name='register'),
    path('suratpengantarumum/', views.surat_pengantar_umum, name='surat_pengantar_umum'),
    path('opencareer/', views.open_career, name='open_career'),
    path('student/dashboard/', views.dashboard_student, name='dashboard_student'),
    path('register/student/', views.register_input_mahasiswa, name='register_input_mahasiswa'),
    path('register/admin/', views.register_admin, name='register_admin'),
    path('student/dashboard/surat_pengantar_input/', views.surat_pengantar_input, name='surat_pengantar_input'),
    path('student/dashboard/permintaan_mock_intv/', views.permintaan_mock_intv, name='permintaan_mock_intv'),
    path('student/dashboard/portal_inplace/', views.portal_inplace, name='portal_inplace'),
    path('student/dashboard/pengunggahan_cv/', views.pengunggahan_cv, name='pengunggahan_cv'),
    path('student/dashboard/konfirmasi_coop/', views.konfirmasi_coop, name='konfirmasi_coop'),
    path('student/dashboard/laporan_hasil_magang/', views.laporan_hasil_magang, name='laporan_hasil_magang'),
    path('student/dashboard/pengunduran_diri_mahasiswa/', views.pengunduran_diri_mahasiswa, name='pengunduran_diri_mahasiswa'),
    path('admin-coop/dashboard/', views.dashboard_admin, name='dashboard_admin'),
    path('admin-coop/dashboard/daftar_mahasiswa/', views.daftar_mahasiswa, name='daftar_mahasiswa'),
    path('admin-coop/dashboard/daftar_mahasiswa/detail/', views.detail_daftar_mahasiswa, name='detail_daftar_mahasiswa'),
    path('admin-coop/dashboard/daftar_surat_pengantar/', views.daftar_surat_pengantar, name='daftar_surat_pengantar'),
    path('admin-coop/dashboard/daftar_mock_intv/', views.daftar_mock_intv, name='daftar_mock_intv'),
    path('admin-coop/dashboard/daftar_inplace/', views.daftar_inplace, name='daftar_inplace'),
    path('admin-coop/dashboard/daftar_pengunggahan_cv/', views.daftar_pengunggahan_cv, name='daftar_pengunggahan_cv'),
    path('admin-coop/dashboard/daftar_pengunggahan_cv/detail/', views.detail_cv, name='detail_cv'),
    path('admin-coop/dashboard/daftar_konfirmasi_coop/', views.daftar_konfirmasi_coop, name='daftar_konfirmasi_coop'),
    path('admin-coop/dashboard/daftar_laporan_hasil_magang/', views.daftar_laporan_hasil_magang, name='daftar_laporan_hasil_magang'),
    path('admin-coop/dashboard/daftar_pengunduran_diri/', views.daftar_pengunduran_diri, name='daftar_pengunduran_diri'),
    path('admin-coop/dashboard/daftar_surat_pengantar/detail/', views.daftar_surat_pengantar_detail, name='daftar_surat_pengantar_detail'),
    path('admin-coop/dashboard/daftar_konfirmasi_coop/detail/', views.daftar_konfirmasi_coop_detail, name='daftar_konfirmasi_coop_detail'),
] 

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
