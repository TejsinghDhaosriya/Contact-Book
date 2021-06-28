from django.utils import timezone
from rest_framework import status
from rest_framework.response import Response


def upload_location(instance, filename):
    """
    Return the URL to the location of the uploaded file
    :param instance: Object instance
    :param filename: Name of the file
    :return: URL of the location of the uploaded file
    """
    ext_set = filename.split(".")
    model = str(instance.__class__.__name__).lower()
    return "%s/%s.%s" % (model, timezone.now(), ext_set[-1])


def delete_instance(instance, message):
    instance.is_active = False
    instance.is_deleted = True
    instance.save()
    return Response({"message": message}, status=status.HTTP_200_OK)
