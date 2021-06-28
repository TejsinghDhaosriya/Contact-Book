from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import Permission

from rest_framework import serializers
from rest_framework.authtoken.models import Token


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    user_permissions = serializers.SerializerMethodField()

    def get_user_permissions(self, obj):
        return obj.get_user_permissions()

    class Meta:
        model = User
        fields = ["id", "username", "email", "first_name", "last_name", "url",
                  "mobile", "is_active", "is_approved", "address", "user_permissions"]
        extra_kwargs = {
            "url": {"view_name": "api:user-detail", "lookup_field": "username"}
        }



class UserInfoSerializer(serializers.ModelSerializer):
    user_permissions = serializers.SerializerMethodField()

    def get_user_permissions(self, obj):
        return obj.get_user_permissions()

    class Meta:
        model = User
        fields = ["id", "username", "email", "first_name", "last_name",
                  "is_staff", "is_superuser", "is_active", 'is_approved', "user_permissions"]


class TokenSerializer(serializers.ModelSerializer):
    user = UserInfoSerializer(read_only=True)

    class Meta:
        model = Token
        fields = ('key', 'user')



