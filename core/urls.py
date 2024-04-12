from . import views
from django.urls import path, include

urlpatterns = [
    
    path('location/', views.map, name="location"),
]
