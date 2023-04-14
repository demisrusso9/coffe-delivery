import { useState } from 'react'
import { HeaderContainer } from './styles'
import logo from '../../assets/logo.png'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { useCoffee } from '../../context/coffeeContext'

export function Header() {
  const { cartTotal } = useCoffee()
  const navigate = useNavigate()

  function navigateTo(url: string) {
    navigate(`/${url}`)
  }
  return (
    <HeaderContainer>
      <img src={logo} alt='' onClick={() => navigateTo('')} />

      <div>
        <button>
          <MapPin size={22} weight='fill' />
          Mogi Mirim, Sp
        </button>

        <button onClick={() => navigateTo('checkout')}>
          {cartTotal !== 0 && <div>{cartTotal}</div>}
          <ShoppingCart size={22} weight='fill' />
        </button>
      </div>
    </HeaderContainer>
  )
}
