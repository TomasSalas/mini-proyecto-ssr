import React, { useState } from 'react'
import { FormatRut } from '../helpers/FormatRut'
import { useNavigate } from 'react-router-dom'

export function Rut() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    const { value } = event.target
    const upperCaseValue = value.toUpperCase()
    const filteredValue = upperCaseValue.replace(/[^0-9K]/g, '')
    const finalValue = filteredValue.replace(/K.*$/, 'K')
    const formattedValue = FormatRut(finalValue)
    setInputValue(formattedValue)
  }

  const nextPage = () => {
    navigate('/password', { state: { rut: inputValue } })
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
              type='text'
              placeholder='Ingresa tu rut'
              value={inputValue}
              maxLength={12}
              onChange={handleChange}
              pattern='[0-9]{1,11}K?'
              title='Solo números del 0 al 9 y una letra K en mayúsculas'
              className='w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-rm-blue-100 focus:border-rm-blue-100'
            />
          </div>
          <div className='flex justify-center mt-4'>
            <button onClick={() => nextPage()} className='p-2 bg-rm-blue-100 text-white hover:bg-rm-blue-200 rounded-lg'>
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
