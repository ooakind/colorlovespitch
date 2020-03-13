from rest_framework import serializers
from .models import Pitch

class PitchSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'color',
        )
        model = Pitch
