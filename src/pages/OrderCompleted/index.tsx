import { useState } from 'react'
import { OrderCompletedContainer, OrderInfo } from './styles'
import illustration from '../../assets/illustration.png'
import { useLocation } from 'react-router'
import { PaymentMethod } from '../Checkout'

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

  const { address, payment } = location.state as LocationState

  return (
    <OrderCompletedContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <section>
        <OrderInfo>
          <div>
            <span>
              Entrega em {address.rua}
              <strong>, {address.numero}</strong>
            </span>
            <strong>
              {address.bairro} - {address.cidade}, {address.uf}
            </strong>
          </div>

          <div>
            <span>Previsão de entrega</span>
            <strong>20 min - 30 min </strong>
          </div>

          <div>
            <span>Pagamento na entrega</span>
            <strong>{payment.name}</strong>
          </div>
        </OrderInfo>

        <img src={illustration} alt='' />
      </section>
    </OrderCompletedContainer>
  )
}

export { OrderCompleted }
