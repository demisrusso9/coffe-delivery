import { useState } from 'react'
import { ShoppingCartSimple, Plus, Minus } from '@phosphor-icons/react'
import { CardContainer, Footer, IncrementDecrement, Information, Tags } from './styles'
import { useCoffee } from '../../context/coffeeContext'

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

    addCoffeeToCart(id)
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

        <IncrementDecrement>
          <button onClick={() => decrement()}>
            <Minus size={14} />
          </button>

          <input type='number' value={count} readOnly />

          <button onClick={() => increment()}>
            <Plus size={14} />
          </button>
        </IncrementDecrement>

        <button onClick={() => handleSubmit(coffee.id)}>
          <ShoppingCartSimple size={22} weight={'fill'} fill={'#FFF'} />
        </button>
      </Footer>
    </CardContainer>
  )
}
