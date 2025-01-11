import React, { useEffect } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

interface FormInterface {
  email: String
  password: String
}

export const Login: React.FunctionComponent = () => {
  const { handleSubmit, setFocus, register } = useForm<FormInterface>()

  useEffect(() => {
    setFocus('email')
  }, [])

  const onSubmit: SubmitHandler<FormInterface> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-2xl">
          <div className="md:flex w-full">
            <div className="w-full py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">
                  Вход в приложение
                </h1>
              </div>
              <div className="text-left">
                <div className="flex -mx-3"></div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold px-1"
                    >
                      Почта
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        {...register('email')}
                        type="email"
                        name="email"
                        id="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Почта"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label
                      htmlFor="password"
                      className="text-xs font-semibold px-1"
                    >
                      Пароль
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        {...register('password')}
                        type="password"
                        name="password"
                        id="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Введите пароль"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                      type="submit"
                    >
                      Войти
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
