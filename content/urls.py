from django.urls import path
from .views import NewsListView, ServiceListView

urlpatterns = [
    path('news/', NewsListView.as_view(), name='news-list'),
    path('services/', ServiceListView.as_view(), name='service-list'),
]
