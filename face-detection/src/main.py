import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from .face_detector import FaceDetector
from .request_body import FaceDetectionRequest
from .response_body import FaceDetectionResponse

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080"
]


HEADERS = {'Content-type': 'application/json', 'Accept': 'text/plain'}


def fastapi_app():
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.get('/')
    def server_is_up():
        return 'server is up'

    @app.post('/detect', response_model=FaceDetectionResponse)
    def post_face_detection(request_body: FaceDetectionRequest):
      face_data = FaceDetector(request_body.image_link).detect()
      response = FaceDetectionResponse(result=face_data)
      return response

    return app


app = fastapi_app()

if __name__ == '__main__':
    uvicorn.run(app, host="127.0.0.1", port=8081)
