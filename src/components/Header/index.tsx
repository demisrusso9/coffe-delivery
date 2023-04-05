import { useState } from 'react'
import { HeaderContainer } from './styles'
import logo from '../../assets/logo.png'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt='' />

      <div>
        <button>
          <MapPin size={22} weight='fill' />
          Mogi Mirim, Sp
        </button>

        <button>
          <ShoppingCart size={22} weight='fill' />
        </button>
      </div>
    </HeaderContainer>
  )
}
