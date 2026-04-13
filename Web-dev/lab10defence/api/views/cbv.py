from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Product
from api.serializers import ProductSerializer


class ActiveProductListAPIView(APIView):
    def get(self, request):
        products = Product.objects.filter(is_active=True)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ExpensiveProductListAPIView(APIView):
    def get(self, request):
        products = Product.objects.filter(price__gt=100000)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)