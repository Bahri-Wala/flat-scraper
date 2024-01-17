from . import models
from rest_framework import serializers
from rest_framework.fields import CharField, URLField

class DataSerializer(serializers.ModelSerializer):
    title = CharField(required=True)
    image = URLField(required=True)

    class Meta:
        model = models.Flat
        fields = (
            'title',
            'image'
        )