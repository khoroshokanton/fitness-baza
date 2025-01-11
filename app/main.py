import uvicorn
from fastapi import FastAPI

from core.config import settings
from api import router_v1

app = FastAPI()
app.include_router(router=router_v1, prefix=settings.api.prefix)

if __name__ == '__main__':
    uvicorn.run('main:app', reload=True)
