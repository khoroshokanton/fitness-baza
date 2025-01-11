import React, { useEffect } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z
  .object({
    firstname: z
      .string()
      .min(2, { message: 'Имя пользователя слишком короткое' }),
    lastname: z
      .string()
      .min(2, { message: 'Фамилия пользователя слишком короткая' }),
    email: z.string().email('Некорректный email'),
    password: z
      .string()
      .min(6, { message: 'Пароль должен содержать не менее 6 символов' })
      .refine((pw) => /[0-9]/.test(pw), 'Пароль должен содержать цифру')
      .refine(
        (pw) => /[А-ЯA-Z]/.test(pw),
        'Пароль должен содержать заглавную букву'
      ),
    confirmPassword: z.string().min(6, 'Повторите пароль'),
    terms: z.literal(true, {
      errorMap: () => ({ message: 'Примите условия использования' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Введенные пароли не совпадают',
  })

type FormSchema = z.infer<typeof schema>

export const Register: React.FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<FormSchema>({ resolver: zodResolver(schema) })

  useEffect(() => {
    setFocus('firstname')
  }, [])

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-2xl">
          <div className="md:flex w-full">
            <div className="w-full py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">
                  Регистрация
                </h1>
                <p>Введите информацию для регистрации</p>
              </div>
              <div className="text-left">
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label
                      htmlFor="firstname"
                      className="text-xs font-semibold px-1"
                    >
                      Имя
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        {...register('firstname')}
                        type="text"
                        name="firstname"
                        id="firstname"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Имя"
                      />
                    </div>
                    {errors.firstname && (
                      <span role="alert" className="error">
                        {errors.firstname?.message}
                      </span>
                    )}
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label
                      htmlFor="lastname"
                      className="text-xs font-semibold px-1"
                    >
                      Фамилия
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        {...register('lastname')}
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Фамилия"
                      />
                    </div>
                    {errors.lastname && (
                      <span role="alert" className="error">
                        {errors.lastname?.message}
                      </span>
                    )}
                  </div>
                </div>
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
                    {errors.email && (
                      <span role="alert" className="error">
                        {errors.email?.message}
                      </span>
                    )}
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
                    {errors.password && (
                      <span role="alert" className="error">
                        {errors.password?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-8">
                    <label
                      htmlFor="confirmPassword"
                      className="text-xs font-semibold px-1"
                    >
                      Подтверждение пароля
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        {...register('confirmPassword')}
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Введите пароль повторно"
                      />
                    </div>
                    {errors.confirmPassword && (
                      <span role="alert" className="error">
                        {errors.confirmPassword?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center relative mb-12">
                  <input
                    {...register('terms')}
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 bg-gray-50 accent-primary-500 focus:outline-2 focus:outline-primary-500 outline-none"
                    aria-invalid={errors.terms ? 'true' : 'false'}
                  />
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 text-sm ml-3 cursor-pointer select-none"
                  >
                    Я принимаю{' '}
                    <a
                      className="font-medium text-primary-500 hover:text-primary-700 focus:text-primary-700 transition-colors outline-none"
                      href="#"
                    >
                      Условия использования
                    </a>
                  </label>
                  {errors.terms && (
                    <span className="error top-5">{errors.terms?.message}</span>
                  )}
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                      type="submit"
                      disabled={!isDirty || isSubmitting}
                    >
                      Регистрация
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
