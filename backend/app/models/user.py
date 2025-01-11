from sqlalchemy import String, text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from core.base import Base

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from .profile import Profile


class User(Base):
    username: Mapped[str] = mapped_column(String(50), nullable=False, unique=True)
    email: Mapped[str] = mapped_column(String(100), nullable=False, unique=True)
    password: Mapped[str]

    is_superadmin: Mapped[bool]
    is_admin: Mapped[bool]
    is_coach: Mapped[bool]
    is_user: Mapped[bool] = mapped_column(default=True, server_default=text('true'))

    profile: Mapped['Profile'] = relationship('Profile', back_populates='user')
