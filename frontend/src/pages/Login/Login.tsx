import React from "react"
import { useState } from "react"

export const Login: React.FunctionComponent = () => {

    const [formState, setFormState] = useState({email: '', password: ''})

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('hello')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-3xl">Войти</h1>
            <div className='display: flex flex-col text-left'>
                <label htmlFor="email" className='text-xl font-bold'>Почта:</label>
                <input type="text" value={formState.email}/>
            </div>
            <div>
                <label htmlFor="password" className='text-2xl font-bold'>Пароль:</label>
                <input type="text" name="password" id="password" value={formState.password} onChange={handleChange}/>
            </div>
            <button type="submit">Войти</button>
        </form>
    )
}
