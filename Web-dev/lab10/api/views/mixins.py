from rest_framework import mixins, generics
from ..models import Product
from ..serializers import ProductSerializer


class ProductListAPIView(mixins.ListModelMixin,
                         mixins.CreateModelMixin,
                         generics.GenericAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class ProductDetailAPIView(mixins.RetrieveModelMixin,
                          mixins.UpdateModelMixin,
                          mixins.DestroyModelMixin,
                          generics.GenericAPIView):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

    def get(self, request, product_id):
        return self.retrieve(request, product_id=product_id)

    def put(self, request, product_id):
        return self.update(request, product_id=product_id)

    def delete(self, request, product_id):
        return self.destroy(request, product_id=product_id)