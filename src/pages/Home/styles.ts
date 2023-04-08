import styled from 'styled-components'

export const LandingSection = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  height: 544px;
  gap: 4rem;

  > div {
    width: 50%;

    h1 {
      font: bold 3rem/1.3 'Baloo 2', sans-serif;
      color: ${props => props.theme['base-title']};
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      width: 80%;
    }

    p {
      font: 400 1.25rem 'Roboto', sans-serif;
      color: ${props => props.theme['base-subtitle']};
      margin-top: 1rem;
      width: 80%;
    }
  }

  .background {
    position: absolute;
    right: 0;
    width: 100%;
  }
`

export const Items = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 350px 450px;
  gap: 20px 0;

  p {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${props => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0;

      height: 32px;
      width: 32px;
      border-radius: 50%;

      svg {
        color: ${props => props.theme['white']};
      }
    }

    &:nth-child(1) span {
      background: ${props => props.theme['yellow-dark']};
    }
    &:nth-child(2) span {
      background: ${props => props.theme['base-text']};
    }
    &:nth-child(3) span {
      background: ${props => props.theme['yellow']};
    }
    &:nth-child(4) span {
      background: ${props => props.theme['purple']};
    }
  }
`

export const OurCoffeeSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;

  h2 {
    font: 800 2rem/1.3 'Baloo 2', sans-serif;
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 3.375rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 280px);
    gap: 40px 32px;
  }
`
