from django.core.validators import RegexValidator

mobile = RegexValidator(regex=r'^[789]\d{9}$', message="Invalid Mobile Number")
