from PIL import Image
import requests
import io
import cv2


def url_to_image(url):
	resp = requests.get(f"{url}", stream=True, headers={'User-agent': 'Mozilla/5.0'})
	image_bytes = io.BytesIO(resp.content)
	image = Image.open(image_bytes)

	return image
