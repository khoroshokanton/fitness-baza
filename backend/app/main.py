import uvicorn
from fastapi import FastAPI
from contextlib import asynccontextmanager

from core.config import settings
from api import router_v1

from core.database import database_manager


@asynccontextmanager
async def lifespan(app: FastAPI):
    # startup
    yield
    # shutdown
    await database_manager.dispose()


app = FastAPI()
app.include_router(router=router_v1, prefix=settings.api.prefix)

if __name__ == '__main__':
    uvicorn.run('main:app', reload=True)
