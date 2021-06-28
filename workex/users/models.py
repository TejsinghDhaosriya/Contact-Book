from django.contrib.auth.models import AbstractUser
from django.db.models import CharField, TextField
from django.db.models import BooleanField
from django.urls import reverse
from django.utils.translation import gettext_lazy as _

from workex.core.behaviours import MobileMixin


class User(AbstractUser, MobileMixin):
    """Default user for workex."""
    is_approved = BooleanField(_('Approved'), null=True)
    address = TextField(_('Address'),  blank=True, null=True)


    def get_absolute_url(self):
        """Get url for user's detail view.

        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"username": self.username})
