from fastapi import APIRouter

router = APIRouter(prefix='/auth')


@router.post('/login')
async def login():
    pass


@router.post('/register')
async def register():
    pass


@router.post('/logout')
async def login():
    pass
