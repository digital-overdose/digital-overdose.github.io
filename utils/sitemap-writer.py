from codecs import open as copen

if __name__ == '__main__':
  l = [];
  with copen('../static.paths.txt', 'r', encoding='utf8') as f:
    l = list(filter(lambda x: x != '', [line.replace('\n', '') for line in f.readlines()]))
    f.close()

  sitemap = """<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
"""

  for link in l:
    _l = link.replace('\n', '').replace('\r', '')
    sitemap += f"""
  <url>
    <loc>https://digitaloverdose.tech{ _l }</loc>
    <priority>0.80</priority>
    <changefreq>daily</changefreq>
  </url>"""

  sitemap += "\n</urlset>"

  with open('../src/sitemap.xml', 'w', encoding='utf8') as f:
    f.write(sitemap);
