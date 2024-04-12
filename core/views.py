from django.shortcuts import render

# Create your views here.
def map(request):
    map_url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.672960671725!2d-116.9380005236796!3d32.481438099031784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d938f8fc28109b%3A0xda90d208768dd581!2zTMOhemFybyBDw6FyZGVuYXMgMTAsIFplcm1lw7FvLCAyMjEyMCBUaWp1YW5hLCBCLkMu!5e0!3m2!1sen!2smx!4v1712691767235!5m2!1sen!2smx"
    return render(request, 'core/components/location.html', {'map_url': map_url})