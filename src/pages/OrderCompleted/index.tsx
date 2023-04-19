import { useState } from 'react'
import { OrderCompletedContainer, OrderInfo } from './styles'
import illustration from '../../assets/illustration.png'

function OrderCompleted() {
  return (
    <OrderCompletedContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <section>
        <OrderInfo>
          <div>
            <span>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </span>
            <strong>Farrapos - Porto Alegre, RS</strong>
          </div>

          <div>
            <span>Previsão de entrega</span>
            <strong>20 min - 30 min </strong>
          </div>

          <div>
            <span>Pagamento na entrega</span>
            <strong>Cartão de Crédito</strong>
          </div>
        </OrderInfo>

        <img src={illustration} alt='' />
      </section>
    </OrderCompletedContainer>
  )
}

export { OrderCompleted }
