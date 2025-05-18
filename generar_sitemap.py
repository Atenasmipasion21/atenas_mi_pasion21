import json
from datetime import date
from xml.etree.ElementTree import Element, SubElement, ElementTree

with open('entradas.json', encoding='utf-8') as f:
    entradas = json.load(f)

urlset = Element('urlset', xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")

# Página principal
url = SubElement(urlset, "url")
SubElement(url, "loc").text = "https://atenasmipasion21.github.io/"
SubElement(url, "lastmod").text = date.today().isoformat()

# Entradas
for entrada in entradas:
    url = SubElement(urlset, "url")
    SubElement(url, "loc").text = entrada['url']
    SubElement(url, "lastmod").text = entrada.get("fecha", date.today().isoformat())

ElementTree(urlset).write("sitemap.xml", encoding="utf-8", xml_declaration=True)
print("✅ sitemap.xml actualizado con éxito")