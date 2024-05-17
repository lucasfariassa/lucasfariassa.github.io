from django.db import models

class MainPageContent(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/')
    link = models.URLField()

