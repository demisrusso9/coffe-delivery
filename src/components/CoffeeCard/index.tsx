import { useState } from 'react'
import { ShoppingCartSimple, Plus, Minus } from '@phosphor-icons/react'
import { ButtonsCount, CardContainer, Footer, Information, Tags } from './styles'
import { useCoffee } from '../../context/coffeeContext'
import { formatPrice } from '../../utils/formatPrice'

interface CoffeCardProps {
  coffee: {
    id: number
    url_image: string
    title: string
    description: string
    tags: string[]
    price: number
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
    if (count < 99) setCount(state => state + 1)
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
        <p>{formatPrice(coffee.price)}</p>

        <ButtonsCount>
          <button onClick={() => decrement()}>
            <Minus size={14} />
          </button>

          <input type='number' value={count} readOnly />

          <button onClick={() => increment()}>
            <Plus size={14} />
          </button>
        </ButtonsCount>

        <button onClick={() => handleSubmit(coffee.id)}>
          <ShoppingCartSimple size={22} weight={'fill'} fill={'#FFF'} />
        </button>
      </Footer>
    </CardContainer>
  )
}
