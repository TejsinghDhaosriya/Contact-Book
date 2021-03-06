# Generated by Django 3.0.10 on 2021-02-22 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_mobile'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='address',
            field=models.TextField(blank=True, null=True, verbose_name='Address'),
        ),
        migrations.AddField(
            model_name='user',
            name='is_approved',
            field=models.BooleanField(null=True, verbose_name='active'),
        ),
    ]
