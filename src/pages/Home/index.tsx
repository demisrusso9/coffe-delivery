import { useState } from 'react'
import { Items, LandingSection, OurCoffeeSection } from './styles'
import landing from '../../assets/landing.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { CoffeeCard } from '../../components/CoffeeCard'

import background from '../../assets/background.png'
import { useCoffee } from '../../context/coffeeContext'

export function Home() {
  const { list } = useCoffee()

  return (
    <>
      <LandingSection>
        <img className='background' src={background} alt='' />

        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <Items>
            <p>
              <span>
                <ShoppingCart size={16} weight={'fill'} />
              </span>
              Compra simples e segura
            </p>
            <p>
              <span>
                <Package size={16} weight={'fill'} />
              </span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span>
                <Timer size={16} weight={'fill'} />
              </span>
              Entrega rápida e rastreada
            </p>
            <p>
              <span>
                <Coffee size={16} weight={'fill'} />
              </span>
              O café chega fresquinho até você
            </p>
          </Items>
        </div>

        <img src={landing} alt='' />
      </LandingSection>

      <OurCoffeeSection>
        <h2>Nossos cafés</h2>

        <div>
          {list.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </OurCoffeeSection>
    </>
  )
}
