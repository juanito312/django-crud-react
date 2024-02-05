
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Asi agregamos todas las rutas del archivo urls.py de la app tasks
    path('tasks/', include('tasks.urls')),
]
