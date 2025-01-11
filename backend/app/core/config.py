from pydantic import BaseModel
from pydantic_settings import BaseSettings, SettingsConfigDict

from pathlib import Path

PROJECT_DIR = Path(__file__).parent.parent.parent


class APISettings(BaseModel):
    prefix: str


class Settings(BaseSettings):

    model_config = SettingsConfigDict(
        env_file=PROJECT_DIR / '.env',
        case_sensitive=False,
        env_nested_delimiter='__',
    )

    api: APISettings


settings = Settings()
