import { useState } from 'react'
import { ShoppingCartSimple, Plus, Minus } from '@phosphor-icons/react'
import { CardContainer, Footer, Information, Tags } from './styles'
import { useCoffee } from '../../context/coffeeContext'
import { IncrementDecrement } from '../../components/IncrementDecrement'

interface CoffeCardProps {
  coffee: {
    id: number
    url_image: string
    title: string
    description: string
    tags: string[]
    price: string
  }
}

export function CoffeeCard({ coffee }: CoffeCardProps) {
  const { addCoffeeToCart } = useCoffee()
  const [count, setCount] = useState(0)

  function handleSubmit(id: number) {
    if (count === 0) return

    addCoffeeToCart(id, count)
  }

  function increment() {
    if (count < 10) setCount(state => state + 1)
  }
  function decrement() {
    if (count > 0) setCount(state => state - 1)
  }

  return (
    <CardContainer>
      <img src={coffee.url_image} alt='' />

      <Tags>
        {coffee.tags.map(tag => (
          <span key={tag}>{tag.toUpperCase()}</span>
        ))}
      </Tags>

      <Information>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </Information>

      <Footer>
        <p>
          <span>R$ </span>
          {coffee.price}
        </p>

        <IncrementDecrement increment={increment} decrement={decrement} count={count} />

        <button onClick={() => handleSubmit(coffee.id)}>
          <ShoppingCartSimple size={22} weight={'fill'} fill={'#FFF'} />
        </button>
      </Footer>
    </CardContainer>
  )
}
