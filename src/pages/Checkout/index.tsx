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
import { useNavigate } from 'react-router'

const schemaValidation = zod.object({
  cep: zod.string().length(8),
  rua: zod.string().min(1).max(30),
  numero: zod.string().min(1).max(4),
  complemento: zod.string().min(0).max(30),
  bairro: zod.string().min(1).max(30),
  cidade: zod.string().min(1).max(30),
  uf: zod.string().min(1).max(2)
})

export interface PaymentMethod {
  id: number
  name: string
}

export type NewCycleFormData = zod.infer<typeof schemaValidation>

export function Checkout() {
  const { cart, updateCoffeeAmount, removeCoffeeFromCart } = useCoffee()
  const [activeButton, setActiveButton] = useState<number | null>(null)
  const [payment, setPayment] = useState({} as PaymentMethod)

  const { register, handleSubmit, formState } = useForm<NewCycleFormData>({
    resolver: zodResolver(schemaValidation)
  })

  const navigate = useNavigate()

  function selectPaymentMethod(buttonId: number, name: string) {
    if (activeButton === buttonId) {
      setActiveButton(null)
    } else {
      setActiveButton(buttonId)
      setPayment({ id: buttonId, name })
    }
  }

  function handleSubmitOrder(address: NewCycleFormData) {
    if (!payment.id) return

    navigate('/success', {
      state: { address, payment }
    })
  }

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
              <input type='text' placeholder='CEP' {...register('cep')} />
            </AddressBlock>

            <AddressBlock>
              <input type='text' placeholder='Rua' {...register('rua')} />
            </AddressBlock>

            <AddressBlock>
              <input type='text' placeholder='Número' {...register('numero')} />
              <input type='text' placeholder='Complemento' {...register('complemento')} />
              <span>Opcional</span>
            </AddressBlock>

            <AddressBlock>
              <input type='text' placeholder='Bairro' {...register('bairro')} />
              <input type='text' placeholder='Cidade' {...register('cidade')} />
              <input type='text' placeholder='UF' {...register('uf')} />
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
            <button
              className={activeButton === 1 ? 'active' : ''}
              onClick={() => selectPaymentMethod(1, 'Cartão de Crédito')}
            >
              <CreditCard size={16} />
              <span>Cartão de Crédito</span>
            </button>

            <button
              className={activeButton === 2 ? 'active' : ''}
              onClick={() => selectPaymentMethod(2, 'Cartão de Débito')}
            >
              <Bank size={16} />
              <span>Cartão de Débito</span>
            </button>

            <button
              className={activeButton === 3 ? 'active' : ''}
              onClick={() => selectPaymentMethod(3, 'Dinheiro')}
            >
              <Money size={16} />
              <span>Dinheiro</span>
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
                      <button onClick={() => updateCoffeeAmount(coffee.id, -1)}>
                        <Minus size={14} />
                      </button>

                      <input type='number' value={coffee.amount} readOnly />

                      <button onClick={() => updateCoffeeAmount(coffee.id, 1)}>
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
