import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  button {
    position: absolute;
    border: none;
    background: transparent;
    cursor: pointer;

    &:first-child {
      left: 5px;
    }

    &:last-child {
      right: 5px;
    }
  }
  
  input[type='number'] {
    width: 72px;
    height: 38px;
    text-align: center;
    border: none;
    outline: none;
    border-radius: 6px;
    padding: 8px;
    background: ${props => props.theme['base-button']};
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
  }
`
