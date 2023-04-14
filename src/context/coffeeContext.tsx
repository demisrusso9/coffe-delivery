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
interface Cart {
  id: number
  url_image: string
  title: string
  price: string
  count: number
}

interface CoffeeContextProps {
  list: Coffee[]
  cart: Cart[]
  cartTotal: number
  addCoffeeToCart(id: number, count: number): void
}

const CoffeeContext = createContext({} as CoffeeContextProps)

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([])
  const cartTotal = cart.length
  const list = db.coffees

  function addCoffeeToCart(id: number, count: number) {
    const coffeeSelected = list.find(coffee => coffee.id === id)

    if (coffeeSelected) {
      const newCoffee = {
        id,
        url_image: coffeeSelected.url_image,
        title: coffeeSelected.title,
        price: coffeeSelected.price,
        count
      }

      setCart([newCoffee, ...cart])
    }
  }

  return <CoffeeContext.Provider value={{ list, cart, cartTotal, addCoffeeToCart }}>{children}</CoffeeContext.Provider>
}

export function useCoffee() {
  return useContext(CoffeeContext)
}
