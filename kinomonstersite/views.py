from django.shortcuts import render

# Create your views here.
def index(request):
	return render(request, "index.html")

def serials(request):
	return render(request, 'serials.html')

def films(request):
	return render(request, 'films.html')

def contacts(request):
	return render(request, 'contacts.html')