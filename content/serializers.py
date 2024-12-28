from rest_framework import serializers
from .models import News, Service

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ['id', 'aze', 'en']

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'service_aze', 'service_en', 'desc_aze', 'desc_en']
