from fastapi import APIRouter

from schemes import LoginSchema, RegisterShema

router = APIRouter(prefix='/auth')


@router.post('/login')
async def login(login_data: LoginSchema):
    pass


@router.post('/register')
async def register(register_data: RegisterShema):
    pass


@router.post('/logout')
async def login():
    pass
