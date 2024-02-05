# Este codigo genera las rutas GET, POST, PUT, DELETE, etc. para el CRUD

from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

# API versioning
routers = routers.DefaultRouter()
routers.register(r'tasks', views.TaskView, 'tasks')

# URLs de la API
urlpatterns = [
    path('api/v1/', include(routers.urls)),
    path('docs/', include_docs_urls(title = "Tasks API"))
]