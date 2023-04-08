import { createContext, useContext, useState } from 'react'
import db from '../../db.json'

interface CoffeeContextProviderProps {
  children: React.ReactNode
}

interface Coffee {
  id: number
  url_image: string
  title: string
  description: string
  tags: string[]
  price: string
}

interface CoffeeContextProps {
  list: Coffee[]
  addCoffeeToCart(id: number): void
}

const CoffeeContext = createContext({} as CoffeeContextProps)

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
  const [list, setList] = useState(db.coffees)

  function addCoffeeToCart(id: number) {}

  return <CoffeeContext.Provider value={{ list, addCoffeeToCart }}>{children}</CoffeeContext.Provider>
}

export function useCoffee() {
  return useContext(CoffeeContext)
}
