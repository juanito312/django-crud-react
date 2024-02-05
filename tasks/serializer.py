from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer): #Para poder mostrar los datos de la base de datos
    class Meta:
        model = Task
        fields = '__all__' #Serializar todos los campos