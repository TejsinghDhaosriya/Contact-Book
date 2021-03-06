# Generated by Django 3.0.10 on 2020-10-10 08:59

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='mobile',
            field=models.CharField(blank=True, help_text='Enter a valid 10 digit mobile number.', max_length=10, validators=[django.core.validators.RegexValidator(message='Invalid Mobile Number', regex='^[789]\\d{9}$')], verbose_name='Mobile Number'),
        ),
    ]
