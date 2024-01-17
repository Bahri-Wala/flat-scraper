from itemadapter import ItemAdapter
from asgiref.sync import sync_to_async


class ScraperPipeline:
    #make saving item to database asynchronous
    @sync_to_async
    def process_item(self, item, spider):
        item.save()
        return item
