from rest_framework.views import APIView
from rest_framework.response import Response
from .models import News, Service
from .serializers import NewsSerializer, ServiceSerializer

class NewsListView(APIView):
    def get(self, request):
        news = News.objects.all()
        serialized_news = NewsSerializer(news, many=True)
        # Format the data to match the required structure
        formatted_news = [{'id': item['id'], 'News': {'Aze': item['aze'], 'En': item['en']}} for item in serialized_news.data]
        return Response(formatted_news)

class ServiceListView(APIView):
    def get(self, request):
        services = Service.objects.all()
        serialized_services = ServiceSerializer(services, many=True)
        # Format the data to match the required structure
        formatted_services = [
            {
                'id': item['id'],
                'Servie': {'Aze': item['service_aze'], 'En': item['service_en']},
                'Desc': {'Aze': item['desc_aze'], 'En': item['desc_en']}
            }
            for item in serialized_services.data
        ]
        return Response(formatted_services)
