import { Route, Routes } from 'react-router-dom'

import { Home } from '../Home/Home'
import { Members } from '../Members/Members'
import { Menu } from '../shared/Menu/Menu'
import { Shop } from '../Shop/Shop'
import { Footer } from '../shared/Footer/Footer'
import { Fans } from '../Fans/Fans'

export function Rutas () {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/integrantes' element={<Members />} />
        <Route path='/tienda' element={<Shop />} />
        <Route path='/fans' element={<Fans />} />
      </Routes>
      <Footer />
    </>
  )
}
