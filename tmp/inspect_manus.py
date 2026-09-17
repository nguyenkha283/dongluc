import re
with open("/tmp/manus_app.js", "r", encoding="utf-8") as f:
    content = f.read()

# Find image URLs used
image_urls = re.findall(r'https?://[^\s"\'\`]+\.(?:jpg|jpeg|png|webp|avif|svg)', content)
print("Image URLs found:", len(image_urls))
for u in list(dict.fromkeys(image_urls))[:20]:
    print("  img:", u)

# Let's inspect sections or component names
keywords = ["grid", "aspect-", "rounded-", "col-span", "flex", "relative overflow-hidden"]
# Look for JSX structures containing img or image cards
matches = re.findall(r'(\<section[^\>]*\>.*?\<\/section\>)', content)
print("Total section tags:", len(matches))

# Look for titles or headings
headings = re.findall(r'<h[1-4][^>]*>(.*?)</h[1-4]>', content)
print("Headings found:", len(headings))
for h in list(dict.fromkeys(headings))[:25]:
    print("  h:", h)
