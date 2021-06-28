from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import include, path, re_path
from django.views import defaults as default_views
from django.views.generic import TemplateView

from rest_framework.authtoken.views import obtain_auth_token
from rest_framework import permissions

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

urlpatterns = [
                  # Django Admin, use {% url 'admin:index' %}
                  path(settings.ADMIN_URL, admin.site.urls),
                  # User management
                  path("users/", include("workex.users.urls", namespace="users")),
                  path("accounts/", include("allauth.urls")),
                  # Your stuff: custom urls includes go here

              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
if settings.DEBUG:
    # Static file serving when using Gunicorn + Uvicorn for local web socket development
    urlpatterns += staticfiles_urlpatterns()


# API URLS
urlpatterns += [
    # API base url
    path("api/", include("config.api_router")),
    # DRF auth token
    path("api/auth-token/", obtain_auth_token),
    path("api/rest-auth/", include('rest_auth.urls')),
    path("api/rest-auth/registration/", include('rest_auth.registration.urls')),

]

