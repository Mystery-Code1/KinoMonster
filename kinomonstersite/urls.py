from django.urls import path, re_path, include
from kinomonstersite import views

urlpatterns = [
	re_path(r"^$", views.index, name="home"),
	re_path(r"^serials/$", views.serials, name="serials"),
	re_path(r"^films/$", views.films, name="films"),
	re_path(r"^contacts/$", views.contacts, name="contacts")
]