from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Product
from api.serializers import ProductSerializer


@api_view(['GET'])
def active_products(request):
    products = Product.objects.filter(is_active=True)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def expensive_products(request):
    products = Product.objects.filter(price__gt=100000)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)