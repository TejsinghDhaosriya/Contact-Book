from rest_framework.viewsets import ModelViewSet
from django_filters import rest_framework as filters
from workex.apps.models import App
from workex.apps.api.serializers import AppSerializer      


class AppFilter(filters.FilterSet):
    name = filters.CharFilter(field_name="name",lookup_expr='icontains')
    class Meta:
        model=App
        fields=['name']



class AppViewSet(ModelViewSet):
    queryset = App.objects.all()
    serializer_class = AppSerializer
    filterset_class=AppFilter
    


