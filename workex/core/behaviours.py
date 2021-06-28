from django.db import models
from django.utils.translation import ugettext_lazy as _

from .managers import StatusMixinManager
from .validators import mobile


class StatusMixin(models.Model):
    is_active = models.BooleanField(_("active"), default=True, blank=False, null=False)
    is_deleted = models.BooleanField(_("deleted"), default=False, blank=False, null=False)

    objects = StatusMixinManager()

    def activate(self):
        if not self.is_active:
            self.is_active = True
            self.save()

    def deactivate(self):
        if self.is_active:
            self.is_active = False
            self.save()

    def remove(self):
        if not self.is_deleted:
            self.is_deleted = True
            self.save()

    def save(self, *args, **kwargs):
        """
        Makes sure that the ``is_active`` is ``False`` when ``is_deleted`` is ``True``.
        """
        if self.is_deleted:
            self.is_active = False
        super(StatusMixin, self).save(*args, **kwargs)

    class Meta:
        abstract = True


class MobileMixin(models.Model):
    mobile = models.CharField(_("Mobile Number"), validators=[mobile], blank=True, null=False, max_length=10,
                              help_text="Enter a valid 10 digit mobile number.")

    def __str__(self):
        return self.mobile

    class Meta:
        abstract = True
