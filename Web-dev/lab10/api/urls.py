from django.urls import path
from .views import *

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),

    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:id>/products/', CategoryProductsAPIView.as_view()),
]