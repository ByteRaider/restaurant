from . import views
from django.urls import path
from django.contrib.auth.decorators import login_required

urlpatterns =[
   path('', views.IndexClassView.as_view(), name='index'),
   #/Food/
   path('<int:pk>/',views.FoodDetail.as_view(),name="detail"),
   path("item/",views.item,name="item"),
   # Add Item
   path('add/',views.CreateItem.as_view(),name="create_item"),
   # Edit Item
   path('update/<int:id>/',views.update_item,name="update_item"),
   # Delete Item
   path('delete/<int:id>/',views.delete_item,name="delete_item"),   
]
