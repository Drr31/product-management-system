from django.shortcuts import render
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http.response import JsonResponse
from .models import Product
from .serializers import ProductSerializer


class ProductView(APIView):
     
    def get_product(self, pk):
        try:
            product = Product.objects.get(product_id=pk)
            return product
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_product(pk)
            serializer = ProductSerializer(data)
        else:
            data = Product.objects.all()
            serializer = ProductSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk=None):
        product_to_update = Product.objects.get(product_id=pk)
        serializer = ProductSerializer(instance=product_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Product updated Successfully", safe=False)
        return JsonResponse("Failed To Update Product")

    def delete(self, request, pk):
        product_to_delete = Product.objects.get(product_id=pk)
        product_to_delete.delete()
        return JsonResponse("Product Deleted Successfully", safe=False)
    
    
    



    
   