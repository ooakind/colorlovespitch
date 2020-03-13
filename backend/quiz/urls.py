from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListPitch.as_view()),
]
