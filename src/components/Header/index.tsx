import { useState } from 'react'
import { HeaderContainer } from './styles'
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <div>
        <button>Mogi</button>
        <button>3</button>
      </div>
    </HeaderContainer>
  )
}