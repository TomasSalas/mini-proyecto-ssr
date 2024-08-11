import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Index } from './Index'
import { BrowserRouter as Router } from 'react-router-dom'

describe('IndexPage', () => {
  test('renderize el componente index', () => {
    window.localStorage.setItem('profiles', JSON.stringify({
      first_name: 'Nombre',
      last_name: 'Apellido'
    }))

    render(
      <Router>
        <Index title='Sistema Receta'>
          <div>
            <div className='flex flex-row justify-between w-full border-b-2 pb-2 border-cyan-500'>
              <div> <span className='text-sm'> Folio:</span></div>
              <div className='flex items-center gap-2'>
                <span className='text-sm'> <span className='text-cyan-400'>Recetas Medicas</span> </span>
                <span className='material-symbols-outlined text-cyan-400'>folder_open</span>
                <span className='material-symbols-outlined text-cyan-400 transform rotate-45'>attach_file</span>
              </div>
            </div>
            <div className='text-xs pt-2'> Fecha Emisión: </div>
            <div> <span className='text-cyan-400 font-bold'>Dr.</span></div>
            <div> Especialidad </div>
            <div className='text-xs'> Codigo: </div>
            <div className='text-xs w-100 flex justify-end'>
              <button className='pt-2 pb-2 pl-6 pr-6 bg-cyan-300 text-white'> Ver </button>
            </div>
          </div>
        </Index>
      </Router>
    )
    expect(screen.findByText('Folio:'))
    expect(screen.findByText('Recetas Medicas'))
    expect(screen.findByText('Fecha Emisión:'))
    expect(screen.findByText('Dr.'))
    expect(screen.findByText('Codigo:'))
    expect(screen.findByRole('button', { name: 'Ver' }))
  })
})
