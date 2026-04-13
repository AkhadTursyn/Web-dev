from django.urls import path
from api.views import *

urlpatterns = [
    path('products/active/', ActiveProductListAPIView.as_view()),
    path('products/expensive/', ExpensiveProductListAPIView.as_view()),
]