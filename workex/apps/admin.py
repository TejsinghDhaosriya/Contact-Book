from django.contrib import admin

from import_export.admin import ImportExportActionModelAdmin

from .models import App


@admin.register(App)
class AppAdmin(ImportExportActionModelAdmin):
    model = App
    list_display = ['name','email','phonenum','address','city','state','pincode']
    list_filter = list_display

    

