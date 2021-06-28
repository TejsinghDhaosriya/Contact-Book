from rest_framework.viewsets import ModelViewSet

from workex.apps.models import App
from workex.apps.api.serializers import AppSerializer      
      

class AppViewSet(ModelViewSet):
    queryset = App.objects.all()
    serializer_class = AppSerializer
    filter_fields=['name']


