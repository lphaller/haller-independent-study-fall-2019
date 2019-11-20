from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import viewsets
from .serializers import FavoriteSerializer, UserSerializer
from .models import Favorite

class FavoriteViewSet(viewsets.ModelViewSet):

    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer

class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer