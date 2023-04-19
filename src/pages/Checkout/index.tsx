import { useState } from 'react'
import {
  Actions,
  Address,
  AddressBlock,
  AddressForm,
  AddressTitle,
  ButtonsCount,
  CartItens,
  OrderConfirmation,
  OrderContainer,
  Payment,
  PaymentCard,
  PaymentTitle,
  PriceInformation
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash
} from '@phosphor-icons/react'
import { useCoffee } from '../../context/coffeeContext'
import { formatPrice } from '../../utils/formatPrice'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const schemaValidation = zod.object({
  CEP: zod.string().length(8),
  Rua: zod.string().min(1).max(30),
  Número: zod.string().min(1).max(4),
  Complemento: zod.string().min(0).max(30),
  Bairro: zod.string().min(1).max(30),
  Cidade: zod.string().min(1).max(30),
  UF: zod.string().min(1).max(2)
})

export type NewCycleFormData = zod.infer<typeof schemaValidation>

export function Checkout() {
  const { cart, updateCoffeeAmount, removeCoffeeFromCart } = useCoffee()
  const [active, setActive] = useState<number | null>(null)

  const { register, handleSubmit, formState } = useForm<NewCycleFormData>({
    resolver: zodResolver(schemaValidation)
  })

  function handleClick(buttonId: number) {
    if (active === buttonId) {
      setActive(null)
    } else {
      setActive(buttonId)
    }
  }

  function increment(id: number) {
    updateCoffeeAmount(id, 1)
  }

  function decrement(id: number) {
    updateCoffeeAmount(id, -1)
  }

  function handleSubmitOrder(data: NewCycleFormData) {}

  const emptyCart = cart.length === 0

  const totalPrice = cart.reduce((acc, curr) => {
    const coffeePrice = curr.price * curr.amount

    return acc + coffeePrice
  }, 0)

  const shippingPrice = 3.5

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
              <input type='text' placeholder='CEP' {...register('CEP')} />
            </AddressBlock>

            <AddressBlock>
              <input type='text' placeholder='Rua' {...register('Rua')} />
            </AddressBlock>

            <AddressBlock>
              <input type='text' placeholder='Número' {...register('Número')} />
              <input type='text' placeholder='Complemento' {...register('Complemento')} />
            </AddressBlock>

            <AddressBlock>
              <input type='text' placeholder='Bairro' {...register('Bairro')} />
              <input type='text' placeholder='Cidade' {...register('Cidade')} />
              <input type='text' placeholder='UF' {...register('UF')} />
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
                    <ButtonsCount>
                      <button onClick={() => decrement(coffee.id)}>
                        <Minus size={14} />
                      </button>

                      <input type='number' value={coffee.amount} readOnly />

                      <button onClick={() => increment(coffee.id)}>
                        <Plus size={14} />
                      </button>
                    </ButtonsCount>
                    <button onClick={() => removeCoffeeFromCart(coffee.id)}>
                      <Trash size={16} />
                      Remover
                    </button>
                  </Actions>
                </div>

                <p>{formatPrice(coffee.price)}</p>
              </div>
            ))}
          </CartItens>

          <PriceInformation>
            <div>
              <span>Total de itens</span>
              <span className='price'>{!emptyCart ? formatPrice(totalPrice) : formatPrice(0)}</span>
            </div>

            <div>
              <span>Entrega</span>
              <span className='price'>{!emptyCart ? formatPrice(shippingPrice) : formatPrice(0)}</span>
            </div>

            <div>
              <strong>Total</strong>
              <strong>{!emptyCart ? formatPrice(totalPrice + shippingPrice) : formatPrice(0)}</strong>
            </div>
          </PriceInformation>

          <button disabled={cart.length === 0} onClick={handleSubmit(handleSubmitOrder)}>
            confirmar pedido
          </button>
        </OrderConfirmation>
      </section>
    </OrderContainer>
  )
}
