from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
import play_scraper
import json


from workex.apps.models import App
from workex.apps.api.serializers import AppSerializer      

class AppViewSet(ModelViewSet):
    serializer_class = AppSerializer
    queryset = App.objects.all()
    def list(self, request, *args, **kwargs):
        queryset = App.objects.all()
        serializer = AppSerializer(queryset, many=True)
        return Response(serializer.data)

      
