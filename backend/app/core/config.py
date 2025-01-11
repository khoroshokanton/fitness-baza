from pydantic import BaseModel, computed_field
from pydantic_settings import BaseSettings, SettingsConfigDict

from pathlib import Path

PROJECT_DIR = Path(__file__).parent.parent.parent


class APISettings(BaseModel):
    prefix: str


class DBSettings(BaseModel):
    user: str
    password: str
    host: str
    port: str
    name: str

    echo: bool = False
    pool_size: int = 100
    max_overflow: int = 0
    pool_pre_ping: bool = False

    @computed_field
    def url(self):
        return (
            f'postgresql+asyncpg://{self.user}:{self.password}@{self.host}:{self.port}/{self.name}'
        )


class Settings(BaseSettings):

    model_config = SettingsConfigDict(
        env_file=PROJECT_DIR / '.env',
        case_sensitive=False,
        env_nested_delimiter='__',
    )

    api: APISettings

    db: DBSettings


settings = Settings()
print(settings.url)
