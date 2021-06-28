from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.postgres.fields import JSONField
from model_utils.models import TimeStampedModel

from workex.core.behaviours import StatusMixin


class App(models.Model):
    name = models.CharField(_('name'), max_length=255, blank=False, null=False)
    email=models.CharField(unique=True,null=False,max_length=100)
    phonenum=models.IntegerField()
    address=models.CharField(max_length=500)
    city=models.CharField(max_length=30)
    state=models.CharField(max_length=30)
    pincode=models.IntegerField()

    def __str__(self):
        return self.name





