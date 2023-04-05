import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 104px;

  div {
    display: flex;
    gap: 0.75rem;
  }

  button {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    gap: 0.25rem;
    color: ${props => props.theme['purple-dark']};

    &:first-child {
      background: ${props => props.theme['purple-light']};

      svg {
        color: ${props => props.theme.purple};
      }
    }

    &:last-child {
      background: ${props => props.theme['yellow-light']};

      svg {
        color: ${props => props.theme['yellow-dark']};
      }
    }
  }
`
