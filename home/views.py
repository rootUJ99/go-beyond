from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import User
from django.contrib.auth.models import User, Group


def index(request):
    # user= User.objects.all()
    user = User.objects.all()
    print('user', user)
    for u in user:
        print('u', u.userName)
        name = u.name
        userName = u.userName
        password = u.password
    return JsonResponse(
        {'name': name,
         'userName': userName,
         'password': password,
         })
    # return HttpResponse('hello')
