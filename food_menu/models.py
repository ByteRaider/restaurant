from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

class Item(models.Model):
    user_name = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    item_name = models.CharField(max_length=200)
    item_desc = models.CharField(max_length=200)
    item_price = models.DecimalField(max_digits=6, decimal_places=2)
    item_image = models.ImageField(upload_to='menu_images/', default='default.jpg')
    
    def __str__(self):
        return self.item_name

    def get_absolute_url(self):
        return reverse("food_menu:detail", kwargs={"pk": self.pk})