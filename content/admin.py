from django.contrib import admin
from .models import News, Service

# Register the News model
@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('id', 'aze', 'en')  # Fields to display in the admin list view
    search_fields = ('aze', 'en')      # Fields to search in the admin interface
    list_filter = ('id',)             # Fields to filter in the admin interface

# Register the Service model
@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'service_aze', 'service_en', 'desc_aze', 'desc_en')  # Fields to display in the admin list view
    search_fields = ('service_aze', 'service_en', 'desc_aze', 'desc_en')      # Fields to search in the admin interface
    list_filter = ('id',)                                                   # Fields to filter in the admin interface
