import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 5rem;
  background: ${props => props.theme.background};

  
  @media (max-width: 620px) {
    padding: 1rem;
    gap: 10rem;
  }
`
