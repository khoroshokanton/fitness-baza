from datetime import date

from pydantic import BaseModel


class Profile:
    firstname: str
    lastname: str
    birthday: date
