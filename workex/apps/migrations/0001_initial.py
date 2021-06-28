# Generated by Django 3.0.10 on 2021-06-28 11:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='App',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='name')),
                ('email', models.CharField(max_length=100, unique=True)),
                ('phonenum', models.IntegerField()),
                ('address', models.CharField(max_length=500)),
                ('city', models.CharField(max_length=30)),
                ('state', models.CharField(max_length=30)),
                ('pincode', models.IntegerField()),
            ],
        ),
    ]