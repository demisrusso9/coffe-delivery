import styled from 'styled-components'

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

  > div {
    display: flex;
    flex-direction: column;
  }
`
// ${props => props.theme['background']};
