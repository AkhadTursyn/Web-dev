from django.http import JsonResponse
from .models import Product


def product_list(request):
    products = Product.objects.all()

    category_id = request.GET.get("category")
    active = request.GET.get("active")
    search = request.GET.get("search")

    if category_id:
        products = products.filter(category_id=category_id)

    if active is not None:
        if active.lower() == "true":
            products = products.filter(is_active=True)
        elif active.lower() == "false":
            products = products.filter(is_active=False)

    if search:
        products = products.filter(name__icontains=search)

    data = []
    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "count": p.count,
            "is_active": p.is_active,
            "category": p.category.name
        })

    return JsonResponse(data, safe=False)