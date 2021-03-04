from pydantic import BaseModel


class FaceDetectionRequest(BaseModel):
    image_link: str

    class Config:
        schema_extra = {
            "example": {
                "image_link": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
        }
