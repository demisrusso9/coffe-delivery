import { useState } from 'react'
import {
  Actions,
  Address,
  AddressBlock,
  AddressForm,
  AddressTitle,
  CartItens,
  OrderConfirmation,
  OrderContainer,
  Payment,
  PaymentCard,
  PaymentTitle
} from './styles'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from '@phosphor-icons/react'
import { useCoffee } from '../../context/coffeeContext'
import { IncrementDecrement } from '../../components/IncrementDecrement'

export function Checkout() {
  const { cart } = useCoffee()
  const [active, setActive] = useState<number | null>(null)

  function handleClick(buttonId: number) {
    if (active === buttonId) {
      setActive(null)
    } else {
      setActive(buttonId)
    }
  }

  console.log({ cart })

  return (
    <OrderContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <Address>
          <AddressTitle>
            <MapPinLine size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressTitle>

          <AddressForm>
            <AddressBlock>
              <input type='text' name='CEP' placeholder='CEP' />
            </AddressBlock>

            <AddressBlock>
              <input type='text' name='Rua' placeholder='Rua' />
            </AddressBlock>

            <AddressBlock>
              <input type='text' name='Número' placeholder='Número' />
              <input type='text' name='Complemento' placeholder='Complemento' />
            </AddressBlock>

            <AddressBlock>
              <input type='text' name='Bairro' placeholder='Bairro' />
              <input type='text' name='Cidade' placeholder='Cidade' />
              <input type='text' name='UF' placeholder='UF' />
            </AddressBlock>
          </AddressForm>
        </Address>

        <Payment>
          <PaymentTitle>
            <CurrencyDollar size={22} />
            <div>
              <strong>Pagamento</strong>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </PaymentTitle>

          <PaymentCard>
            <button className={active === 1 ? 'active' : ''} onClick={() => handleClick(1)}>
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </button>

            <button className={active === 2 ? 'active' : ''} onClick={() => handleClick(2)}>
              <Bank size={16} />
              <span>cartão de débito</span>
            </button>

            <button className={active === 3 ? 'active' : ''} onClick={() => handleClick(3)}>
              <Money size={16} />
              <span>dinheiro</span>
            </button>
          </PaymentCard>
        </Payment>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <OrderConfirmation>
          <CartItens>
            {cart.map(coffee => (
              <div key={coffee.id}>
                <img src={coffee.url_image} alt='' />

                <div>
                  <p>{coffee.title}</p>
                  <Actions>
                    <IncrementDecrement count={coffee.count} />
                    <button>
                      <Trash size={16} />
                      Remover
                    </button>
                  </Actions>
                </div>

                <p>
                  <span>R$ </span>
                  {coffee.price}
                </p>
              </div>
            ))}
          </CartItens>
        </OrderConfirmation>
      </section>
    </OrderContainer>
  )
}
