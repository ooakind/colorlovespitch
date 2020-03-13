from django.db import models

# Create your models here.


class Pitch(models.Model):
    name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)

    def __str__(self):
        return self.name
