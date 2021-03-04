from mtcnn import MTCNN
from .preprocessor import url_to_image
import cv2
import numpy


class FaceDetector:
	def __init__(self, image_link):
		self.image_link = image_link

	def detect(self):
		img = url_to_image(self.image_link)
		img = cv2.cvtColor(numpy.array(img), cv2.COLOR_BGR2RGB)
		detector = MTCNN()

		return detector.detect_faces(img)
