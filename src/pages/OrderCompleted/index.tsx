import { useState } from 'react'
import { AddressLocation, DeliveryTime, OrderCompletedContainer, OrderInfo, Payment } from './styles'
import illustration from '/assets/illustration.png'
import { useLocation } from 'react-router'
import { PaymentMethod } from '../Checkout'
import { CurrencyDollar, CurrencyDollarSimple,MapPin, Timer } from '@phosphor-icons/react'
import { Navigate } from 'react-router-dom'

interface LocationState {
  address: {
    cep: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
  }
  payment: PaymentMethod
}

function OrderCompleted() {
  const location = useLocation()

  if(!location.state) {
    return <Navigate to="/" replace />;
  }

  const { address, payment } = location.state as LocationState

  console.log({address, payment});


  return (
    <OrderCompletedContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <section>
        <OrderInfo>
          <AddressLocation>
            <button>
              <MapPin size={16} weight='fill' />
            </button>

            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {address.rua}, {address.numero}
                </strong>
              </span>
              <span>
                {address.bairro} - {address.cidade}, {address.uf}
              </span>
            </div>
          </AddressLocation>

          <DeliveryTime>
            <button>
              <Timer size={16} weight='fill' />
            </button>

            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min </strong>
            </div>
          </DeliveryTime>

          <Payment>
            <button>
              <CurrencyDollar size={16} />
            </button>

            <div>
              <span>Pagamento na entrega</span>
              <strong>{payment.name}</strong>
            </div>
          </Payment>
        </OrderInfo>

        <img src={illustration} alt='' />
      </section>
    </OrderCompletedContainer>
  )
}

export { OrderCompleted }
