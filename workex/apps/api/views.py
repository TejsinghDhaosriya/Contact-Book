from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action

from workex.apps.models import App
from workex.apps.api.serializers import AppSerializer      
      

class AppViewSet(ModelViewSet):
    queryset = App.objects.all()
    serializer_class = AppSerializer
    filter_fields=['name']


