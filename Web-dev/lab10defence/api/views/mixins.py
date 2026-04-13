from rest_framework import generics, mixins
from api.models import Product
from api.serializers import ProductSerializer


class ActiveProductListAPIView(mixins.ListModelMixin,
                               generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(is_active=True)

    def get(self, request):
        return self.list(request)


class ExpensiveProductListAPIView(mixins.ListModelMixin,
                                  generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(price__gt=100000)

    def get(self, request):
        return self.list(request)