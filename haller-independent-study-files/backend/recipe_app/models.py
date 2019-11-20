from django.db import models
from django.contrib.auth.models import User

class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    recipe_id = models.CharField(max_length=64)
    description = models.TextField(blank=True, null=True)


