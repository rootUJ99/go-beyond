from django.urls import path

from . import views
from rest_framework import routers
from .api import UserViewSet

router = routers.DefaultRouter()
router.register('api/home', UserViewSet, 'home')

urlpatterns = router.urls