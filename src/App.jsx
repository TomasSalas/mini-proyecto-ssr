import { Routes, Route } from 'react-router-dom'
import { Rut } from './Pages/Rut'
import { Password } from './Pages/Password'
import { Index } from './Pages/Index'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Rut />} />
      <Route path='/password' element={<Password />} />
      <Route path='/index' element={<Index />} />
    </Routes>
  )
}
