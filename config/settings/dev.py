
'''Use this for development'''
import os
from .base import *

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'drw&453iut4&7d#$2sj^f#=3@79z4uy)48o0ou_=aw3^uupgpi'
DEBUG = True
WSGI_APPLICATION = 'config.wsgi.application'
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    },
    
}
CORS_ORIGIN_ALLOW_ALL = True #


ALLOWED_HOSTS = ["*"]