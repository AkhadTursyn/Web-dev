from rest_framework import generics
from api.models import Product
from api.serializers import ProductSerializer


class ActiveProductListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(is_active=True)


class ExpensiveProductListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(price__gt=100000)