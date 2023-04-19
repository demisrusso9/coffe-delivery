import { Routes, Route } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { DefaultLayout } from './pages/layout/DefaultLayout'
import { OrderCompleted } from './pages/OrderCompleted'

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />} path='/'>
        <Route element={<Home />} path='/' />
        <Route element={<Checkout />} path='checkout' />
        <Route element={<OrderCompleted />} path='success' />
      </Route>
    </Routes>
  )
}
