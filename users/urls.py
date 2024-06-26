from . import views
from django.urls import path
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(template_name='users/login.html', next_page='index'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='users/login.html', next_page='users:login'), name='logout'),
#    path('register/', views.register, name='register'), #  Disabled for now register users via admin panel
]
