import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  width: 256px;
  height: 310px;
  background: ${props => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    margin-top: -3rem;
    width: 120px;
    height: 120px;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  span {
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    border-radius: 100px;
    padding: 4px 8px;
    font: bold 0.625rem/1.3 'Roboto', sans-serif;
  }
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 33px;

  h3 {
    color: ${props => props.theme['base-subtitle']};
    font: 700 normal 1.25rem/1.3 'Baloo 2', sans-serif;
  }
  p {
    text-align: center;
    color: ${props => props.theme['base-label']};
    font: 400 normal 0.875rem/1.3 'Roboto', sans-serif;
  }
`

export const Footer = styled.div`
  display: flex;
  align-items: center;

  p {
    color: ${props => props.theme['base-text']};
    font: 800 normal 1.5rem/1.3 'Baloo 2', sans-serif;

    span {
      font: 400 .875rem/1.3 'Roboto', sans-serif;
    }
    margin-right: 23px;
  }

  > button {
    margin-left: 8px;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    background: ${props => props.theme['purple-dark']};
    transition: background 0.3s;

    &:hover {
      background: ${props => props.theme['purple']};
    }
  }
`

export const IncrementDecrement = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  
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
