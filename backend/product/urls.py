from django.urls import path
from .views import ProductView

urlpatterns = [
    path('product/', ProductView.as_view()),
    path('product/<int:pk>/', ProductView.as_view())
]