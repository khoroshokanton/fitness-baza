from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from core.base import Base

from datetime import date

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .user import User


class Profile(Base):
    firstname: Mapped[str] = mapped_column(String(50))
    lastname: Mapped[str] = mapped_column(String(100))

    birthday: Mapped[date]

    user_id: Mapped[int] = mapped_column(ForeignKey('users.id'))

    user: Mapped['User'] = relationship('User', back_populates='profile')
