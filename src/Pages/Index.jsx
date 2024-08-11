import React, { useEffect, useState } from 'react'
import { getRecetas } from '../functions/getReceta'
import { useNavigate } from 'react-router-dom'

export function Index() {
  const navigate = useNavigate()
  const [receta, setReceta] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalPagina, setTotalPagina] = useState(1)
  const [paginaSiguiente, setPaginaSiguinete] = useState(false)
  const local = JSON.parse(localStorage.getItem('profiles'))

  const infoRecetas = async () => {
    await getRecetas(pagina, setReceta, setTotalPagina, setPaginaSiguinete, navigate)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token === null) {
      return navigate('/')
    }
    infoRecetas()
  }, [pagina])

  return (
    <div className='h-screen flex flex-col'>
      <div className='w-full bg-slate-100 rounded-lg flex justify-end pr-2 py-4'>
        <h1 className='text-sm font-bold'>
          {local.first_name + ' ' + local.last_name}
        </h1>
      </div>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-2 p-2'>
        {receta.length > 0 && receta.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-between p-5 w-auto ${item.type.includes('Retenida') ? 'bg-red-100' : 'bg-green-100'}`}
            >
              <div className='flex flex-row justify-between w-full border-b-2 pb-2 border-cyan-500'>
                <div> <span className='text-sm'> Folio: <span className='font-bold'>{item.folio}</span></span></div>
                <div className='flex items-center gap-2'>
                  <span className='text-sm'> <span className='text-cyan-400'>Recetas Medicas</span> </span>
                  <span className='material-symbols-outlined text-cyan-400'>folder_open</span>
                  <span className='material-symbols-outlined text-cyan-400 transform rotate-45'>attach_file</span>
                </div>
              </div>
              <div className='text-xs pt-2'> Fecha Emisión: {item.folio} </div>
              <div> <span className='text-cyan-400 font-bold'>Dr. {item.doctor.first_name + ' ' + item.doctor.last_name} </span></div>
              <div> {item.speciality} </div>
              <div className='text-xs'> Codigo: <span className='font-bold'>{item.code}</span> </div>
              <div className='text-xs w-100 flex justify-end'>
                <button className='pt-2 pb-2 pl-6 pr-6 bg-cyan-300 text-white'> Ver </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className='flex justify-center mt-auto p-4'>
        <button
          className='px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50'
          disabled={pagina === 1}
          onClick={() => setPagina(pagina - 1)}
        >
          Anterior
        </button>
        <button
          className='px-4 py-2 mx-2 bg-blue-500 text-white rounded disabled:opacity-50'
          disabled={!paginaSiguiente || pagina === totalPagina}
          onClick={() => setPagina(pagina + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
