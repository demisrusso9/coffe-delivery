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
  price: number
}
interface Cart {
  id: number
  url_image: string
  title: string
  price: number
  amount: number
}

interface CoffeeContextProps {
  list: Coffee[]
  cart: Cart[]
  cartTotal: number
  addCoffeeToCart(id: number, amount: number): void
  updateCoffeeAmount(id: number, amount: number): void
  removeCoffeeFromCart(id: number): void
}

const CoffeeContext = createContext({} as CoffeeContextProps)

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([])
  const cartTotal = cart.length
  const list = db.coffees

  function addCoffeeToCart(id: number, amount: number) {
    const coffeeSelected = list.find(coffee => coffee.id === id)!

    const alreadyExist = cart.findIndex(coffee => coffee.id === coffeeSelected.id)

    console.log(alreadyExist);

    if (alreadyExist !== -1) {
      const auxCart = cart
      auxCart[alreadyExist].amount += amount

      setCart([...auxCart])
    } else {
      const newCoffee = {
        id,
        url_image: coffeeSelected.url_image,
        title: coffeeSelected.title,
        price: coffeeSelected.price,
        amount
      }

      setCart([newCoffee, ...cart])
    }
  }

  function removeCoffeeFromCart(id: number) {
    setCart(cart.filter(coffee => coffee.id !== id))
  }

  function updateCoffeeAmount(id: number, amount: number) {
    const auxCart = cart
    const product = auxCart.find(product => product.id === id)!

    if (product.amount === 1 && amount === -1) return

    product.amount += amount
    setCart([...auxCart])
  }

  return (
    <CoffeeContext.Provider
      value={{ list, cart, cartTotal, addCoffeeToCart, updateCoffeeAmount, removeCoffeeFromCart }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}

export function useCoffee() {
  return useContext(CoffeeContext)
}
