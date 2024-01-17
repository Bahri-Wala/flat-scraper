import scrapy
import json
import time
from scraper.scraper.items import FlatItem

class FlatspiderSpider(scrapy.Spider):
    name = "flatspider"
    allowed_domains = ["sreality.cz"]
    start_urls = ["https://www.sreality.cz/api/en/v2/estates?category_main_cb=1&category_type_cb=1&per_page=500"]

    def parse(self, response):
        response_json = json.loads(response.body)
        for flat in response_json.get('_embedded').get('estates'):
            flat_item = FlatItem()
            flat_item['title'] = flat.get('name')
            flat_item['image'] = flat.get('_links').get('images')[0].get('href')
            yield flat_item