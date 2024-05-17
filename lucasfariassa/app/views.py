from django.shortcuts import render
from .models import MainPageContent

def index(request):
    sections = MainPageContent.objects.all()
    return render(request, '../frontend/public/index.html', {'sections': sections})
