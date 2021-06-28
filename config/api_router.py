from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from workex.users.api.views import UserViewSet
from workex.apps.api.views import AppViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()


# Users
router.register("users", UserViewSet)

# Apps
router.register("apps", AppViewSet)


app_name = "api"
urlpatterns = router.urls
