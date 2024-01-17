from scrapy_djangoitem import DjangoItem
from flat.models import Flat

class FlatItem(DjangoItem):
    django_model = Flat
