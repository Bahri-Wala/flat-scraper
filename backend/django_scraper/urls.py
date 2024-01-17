from django.contrib import admin
from django.urls import path
from flat import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('flats/', views.DataAPIView.as_view())
]