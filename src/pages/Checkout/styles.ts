import styled from 'styled-components'

// Base
export const TitleBase = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  strong {
    font: 400 1rem/1.3 'Roboto', sans-serif;
    color: ${props => props.theme['base-subtitle']};
  }

  p {
    font: 400 0.875rem/1.3 'Roboto', sans-serif;
    color: ${props => props.theme['base-text']};
  }
`

export const CardBase = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme['base-card']};

  @media (max-width: 1240px) {
    padding: 1.5rem;
  }
`

// Components
export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: 640px 448px;
  gap: 2rem;
  margin-top: 75px;

  section h2 {
    margin-bottom: 15px;
    font: bold 1.125rem/1 'Baloo 2', sans-serif;
  }

  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 620px) {
    margin-top: 120px;
  }
`

export const Address = styled(CardBase)`
  border-radius: 6px;
  margin-bottom: 0.75rem;
`

export const AddressTitle = styled(TitleBase)`
  svg {
    fill: ${props => props.theme['yellow-dark']};
  }
`

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const AddressBlock = styled.div`
  display: flex;
  position: relative;

  gap: 0.75rem;

  input {
    border-radius: 4px;
    width: 200px;
    padding: 0.75rem;
    border: none;
    border: 1px solid ${props => props.theme['base-button']};
    background: ${props => props.theme['base-input']};

    &::placeholder {
      color: ${props => props.theme['base-label']};
      font: 400 0.875rem/1.3 'Roboto', sans-serif;
    }

    &:focus {
      outline: none;
      font: 400 0.875rem/1.3 'Roboto', sans-serif;
      color: ${props => props.theme['base-text']};
      border: 1px solid ${props => props.theme['yellow-dark']};
    }
  }

  input[name='rua'],
  input[name='complemento'],
  input[name='cidade'] {
    flex: 1;
  }

  input[name='uf'] {
    width: 60px;
  }

  span {
    position: absolute;
    top: 13px;
    right: 12px;

    font: 400 italic 0.75rem/1.3 'Roboto', sans-serif;
    color: ${props => props.theme['base-label']};
  }

  @media (max-width: 1240px) {
    input[type='text'] {
      width: 100%;
    }

    span {
      display: none;
    }

    flex-direction: column;
  }
`

export const Payment = styled(CardBase)`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
`

export const PaymentTitle = styled(TitleBase)`
  svg {
    fill: ${props => props.theme['purple']};
  }
`

export const PaymentCard = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;

  button {
    border: none;
    background: ${props => props.theme['base-button']};
    border-radius: 6px;
    display: flex;
    justify-content: flex-start;
    flex: 1;
    gap: 0.75rem;
    padding: 1rem;
    transition: background 0.2s;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme['base-hover']};
    }

    svg {
      fill: ${props => props.theme['purple']};
    }

    span {
      color: ${props => props.theme['base-text']};
      font: 400 0.75rem/1.6 'Roboto', sans-serif;
      text-transform: uppercase;
    }
  }

  .active {
    background: ${props => props.theme['purple-light']};
    border: 1px solid ${props => props.theme['purple']};
  }

  @media (max-width: 1240px) {
    flex-direction: column;
  }
`

export const OrderConfirmation = styled(CardBase)`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;

  > button {
    flex: 1;
    cursor: pointer;
    color: ${props => props.theme['white']};
    background: ${props => props.theme['yellow']};
    text-transform: uppercase;
    font: bold 0.875rem/1.6 'Roboto', sans-serif;

    border: none;
    border-radius: 6px;

    padding: 0.75rem 0;
    transition: background 0.2s;

    &:hover {
      background: ${props => props.theme['yellow-dark']};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`

export const CartItens = styled.section`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;

    border-bottom: 1px solid ${props => props.theme['base-button']};
    padding-bottom: 24px;
    margin-bottom: 24px;

    img {
      width: 64px;
      height: 64px;
      margin-right: 20px;
    }

    > div {
      display: flex;
      flex-direction: column;

      p {
        font: 400 1rem/1.3 'Roboto', sans-serif;
      }
    }

    > p {
      color: ${props => props.theme['base-text']};
      font: bold 1rem/1.3 'Roboto', sans-serif;
      margin-left: 45px;

      span {
        font: bold 1rem/1.3 'Roboto', sans-serif;
      }
    }
  }

  @media (max-width: 1240px) {
    > div {
      flex-direction: column;
      align-items: center;

      > div p {
        text-align: center;
      }

      img {
        margin-right: 0;
      }

      p {
        margin-left: 0;
      }
    }
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;

  > button {
    cursor: pointer;
    border: 0;
    display: flex;
    border-radius: 6px;
    align-items: center;
    gap: 4px;

    padding: 0px 8px;

    font: 400 0.75rem/1.3 'Roboto', sans-serif;
    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};
    text-transform: uppercase;

    svg {
      fill: ${props => props.theme['purple']};
    }

    transition: background 0.2s;

    &:hover {
      background: ${props => props.theme['base-hover']};
    }
  }
`

export const ButtonsCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 38px;

  padding: 8px;
  border-radius: 6px;

  background: ${props => props.theme['base-button']};

  button {
    border: none;
    cursor: pointer;
    background: transparent;
    font-size: 0;
  }

  input[type='number'] {
    background: transparent;
    width: 20px;
    text-align: center;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  svg {
    fill: ${props => props.theme['purple']};

    &:hover {
      fill: ${props => props.theme['purple-dark']};
    }
  }
`

export const PriceInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font: 400 0.875rem/1.3 'Roboto', sans-serif;
      color: 1px solid ${props => props.theme['base-text']};
    }

    .price {
      font: 400 1rem/1.3 'Roboto', sans-serif;
    }

    strong {
      font: bold 1.25rem/1.3 'Roboto', sans-serif;
    }
  }
`
