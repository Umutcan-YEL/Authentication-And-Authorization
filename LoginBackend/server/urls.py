from django.contrib import admin
from django.urls import path, re_path
from . import views

urlpatterns = [
    re_path('login/', views.login),
    re_path('signup/', views.signup),
    re_path('test/', views.test_token),
    re_path('get/', views.get_all_data),
    re_path('delete/', views.delete),
]
