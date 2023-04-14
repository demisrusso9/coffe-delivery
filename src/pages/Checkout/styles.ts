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
`

// Components
export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: 640px 448px;
  gap: 2rem;

  section h2 {
    margin-bottom: 15px;
    font: bold 1.125rem/1 'Baloo 2', sans-serif;
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

  input[name='Rua'],
  input[name='Complemento'],
  input[name='Cidade'] {
    flex: 1;
  }

  input[name='UF'] {
    width: 60px;
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
`

export const OrderConfirmation = styled(CardBase)`
  border-radius: 6px 44px;
`

export const CartItens = styled.section`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;

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

    & + div {
      border-top: 1px solid ${props => props.theme['base-button']};
      padding-top: 24px;
      margin-top: 24px;
    }
  }
`
export const Actions = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;

  button {
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
  }
`
