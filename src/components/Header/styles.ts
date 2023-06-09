import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 104px;
  width: 100%;
  max-width: 1440px;
  padding: 0 5rem;
  background-color: ${props => props.theme.white};
  z-index: 1;

  img {
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 0.75rem;
  }

  button {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    gap: 0.25rem;
    color: ${props => props.theme['purple-dark']};

    div {
      position: absolute;
      top: -8px;
      left: 25px;
      
      display: flex;
      align-items: center;
      justify-content: center;

      width: 20px;
      height: 20px;
      border-radius: 100%;
      background: ${props => props.theme['yellow-dark']};

      font: bold 0.75rem/1 'Roboto', sans-serif;
      color: ${props => props.theme.white};
    }

    &:first-child {
      background: ${props => props.theme['purple-light']};

      svg {
        color: ${props => props.theme.purple};
      }
    }

    &:last-child {
      cursor: pointer;
      background: ${props => props.theme['yellow-light']};

      svg {
        color: ${props => props.theme['yellow-dark']};
      }
    }
  }

  @media (max-width: 440px) {
    flex-direction: column;
    justify-content: space-evenly;

    img {
      max-width: 60px;
    }

    button {
      padding: 0.35em;
    }
  }
`
