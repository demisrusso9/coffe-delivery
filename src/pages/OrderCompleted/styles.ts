import styled, { css } from 'styled-components'

const iconBase = css`
  border: 0;
  background: transparent;
  border-radius: 50%;
  font-size: 0;
  width: 32px;
  height: 32px;

  svg {
    fill: ${props => props.theme['white']};
  }
`

export const OrderCompletedContainer = styled.div`
  margin-top: 126px;

  h1 {
    font: bold 2rem/1.3 'Baloo 2', sans-serif;
    color: ${props => props.theme['yellow-dark']};
  }

  p {
    font: 400 1.25rem/1.3 'Roboto', sans-serif;
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 40px;
  }

  section {
    display: flex;
    gap: 102px;
  }

  img {
    max-width: 492px;
    max-height: 293px;
  }
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 40px;
  gap: 32px;

  border: double 1px transparent;
  border-radius: 6px 36px;

  background-image: linear-gradient(${p => p.theme['background']}, ${p => p.theme['background']}),
    radial-gradient(circle at top left, ${p => p.theme['yellow']}, ${p => p.theme['purple']});

  background-origin: border-box;
  background-clip: padding-box, border-box;
`

export const AddressLocation = styled.div`
  display: flex;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
  }

  > button {
    ${iconBase}
    background: ${props => props.theme.purple};
  }

  span {
    font: 400 1rem/1.3 'Roboto', sans-serif;
    color: ${props => props.theme['base-text']};
  }
`

export const DeliveryTime = styled.div`
  display: flex;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
  }

  > button {
    ${iconBase}
    background: ${props => props.theme.yellow};
  }

  span,
  strong {
    font: 400 1rem/1.3 'Roboto', sans-serif;
    color: ${props => props.theme['base-text']};
  }

  strong {
    font-weight: bold;
  }
`

export const Payment = styled.div`
  display: flex;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
  }

  > button {
    ${iconBase}
    background: ${props => props.theme['yellow-dark']};
  }

  span,
  strong {
    font: 400 1rem/1.3 'Roboto', sans-serif;
    color: ${props => props.theme['base-text']};
  }

  strong {
    font-weight: bold;
  }
`
