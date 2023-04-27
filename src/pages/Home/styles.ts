import styled from 'styled-components'

export const LandingSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
  height: 544px;
  margin-top: 20px;
  gap: 56px;

  > div {
    h1 {
      font: bold 3rem/1.3 'Baloo 2', sans-serif;
      color: ${props => props.theme['base-title']};
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    > p {
      font: 400 1.25rem 'Roboto', sans-serif;
      color: ${props => props.theme['base-subtitle']};
      margin-top: 1rem;
    }
  }

  .background {
    position: absolute;
    right: 0;
    width: 100%;
  }

  .landing {
    max-width: 100%;
    height: auto;
  }
`

export const Items = styled.div`
  margin-top: 4.125rem;

  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  white-space: nowrap;
  gap: 20px 40px;

  > p {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${props => props.theme['base-text']};
    font: 400 1rem/1.3 'Roboto', sans-serif;

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
  width: 100%;
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
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 32px;
    width: 1120px;
  }
`
