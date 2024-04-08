from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from food_menu import views as food_menu_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', food_menu_views.IndexClassView.as_view(), name='index'),
    

]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns