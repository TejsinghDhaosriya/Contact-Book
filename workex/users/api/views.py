from django.contrib.auth import get_user_model
from django.contrib.auth.models import Permission
from rest_framework import status, permissions
from rest_framework.decorators import action
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import IsAdminUser
from rest_framework import filters

from .serializers import UserSerializer

User = get_user_model()


class IsSuperUserOrStaff(permissions.BasePermission):
    def has_permission(self, request, view):
        return request.user.is_staff or request.user.is_superuser


class UserViewSet(CreateModelMixin, RetrieveModelMixin, ListModelMixin, UpdateModelMixin, GenericViewSet):
    permission_classes = [IsSuperUserOrStaff]
    serializer_class = UserSerializer
    queryset = User.objects.filter(is_active=True,is_superuser=False)
    lookup_field = "username"

    def get_queryset(self, *args, **kwargs):
        return self.queryset.filter(is_active=True,is_superuser=False)


