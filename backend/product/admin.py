from django.contrib import admin
from .models import Product

# Register your models here.
models_list = [Product]
admin.site.register(models_list)
