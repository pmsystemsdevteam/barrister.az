from django.db import models

class News(models.Model):
    aze = models.TextField(blank=True, null=True)
    en = models.TextField(blank=True, null=True)

class Service(models.Model):
    service_aze = models.TextField(blank=True, null=True)
    service_en = models.TextField(blank=True, null=True)
    desc_aze = models.TextField(blank=True, null=True)
    desc_en = models.TextField(blank=True, null=True)
