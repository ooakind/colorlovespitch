from django.shortcuts import render
from rest_framework import generics

from .models import Pitch
from .serializers import PitchSerializer


class ListPitch(generics.ListCreateAPIView):
    queryset = Pitch.objects.all()
    serializer_class = PitchSerializer
