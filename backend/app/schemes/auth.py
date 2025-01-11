from pydantic import BaseModel, EmailStr, Field


class LoginSchema(BaseModel):
    email: EmailStr
    password: str = Field(min_length=6)


class RegisterShema(LoginSchema):
    username: str = Field(max_length=50)
