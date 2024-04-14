from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.http import HttpResponse
from .models import Item
from django.template import loader
from .forms import ItemForm
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy

class IndexClassView(ListView):
    model = Item
    template_name = 'food_menu/index.html'
    context_object_name = 'item_list'
    

def item(request):
    return HttpResponse(' <h1>This is an item</h1>')

def detail(request,item_id):
    item = Item.objects.get(pk=item_id)
    context ={
        'item':item, 
    }
    return render(request, 'food_menu/detail.html',context)

class FoodDetail(DetailView):
    model = Item
    template_name = 'food_menu/detail.html'


class CreateItem(CreateView):
    model = Item
    fields = ['item_name','item_desc','item_price','item_image']
    template_name='food_menu/item-form.html'
    
    def form_valid(self,form):
        form.instance.user_name = self.request.user
        return super().form_valid(form)
    
    @method_decorator(login_required(login_url=reverse_lazy('users:login')))
    def dispatch(self, *args, **kwargs):
        return super(CreateItem, self).dispatch(*args, **kwargs)
    
@login_required
def update_item(request,id):
    item = Item.objects.get(id=id)
    form = ItemForm(request.POST or None,instance=item)
    if form.is_valid():
        form.save()
        return redirect('index')
    return render(request,'food_menu/item-form.html',{'form':form,'item':item})

@login_required
def delete_item(request,id):
    item = Item.objects.get(id=id)
    if request.method == 'POST':
        item.delete()
        return redirect('index')
    return render(request,'food_menu/item-delete.html',{'item':item})
    