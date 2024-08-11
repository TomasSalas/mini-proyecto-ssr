import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Login } from '../functions/Login'

export function Password() {
  const location = useLocation()
  const navigate = useNavigate()
  const { rut } = location.state || {}
  const [password, setPassword] = useState('')

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const login = async () => {
    const rutFormat = rut.replace(/\./g, '')
    const params = {
      user: {
        password,
        rut: rutFormat
      }
    }

    const { error, message, info } = await Login(params)
    if (error) {
      alert(message)
    } else {
      localStorage.setItem('token', info.data.token)
      localStorage.setItem('profiles', JSON.stringify(info.data.profiles[0]))
      navigate('/index')
    }
  }
  return (
    <>
      <div className='h-screen flex justify-center items-center'>
        <div className='p-10 w-2/6 bg-slate-100 rounded-lg flex flex-col gap-2'>
          <div className='flex flex-col gap-2 pb-2'>
            <span className='font-bold text-xl text-gray-500'> Portal Paciente </span>
            <span className='font-bold text-3xl text-blue-500'> Ingresa a tu portal </span>
          </div>
          <div>
            <input
              type='password'
              placeholder='Ingresa tu contraseña'
              maxLength={12}
              value={password}
              onChange={handlePasswordChange}
              className='w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rm-blue-100 focus:border-rm-blue-100'
            />
          </div>
          <div className='flex justify-center mt-4'>
            <button
              className='p-2 bg-rm-blue-100 text-white hover:bg-rm-blue-200 rounded-lg'
              onClick={login}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
