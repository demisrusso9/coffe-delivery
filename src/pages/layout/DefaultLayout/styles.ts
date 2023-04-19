import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10rem 10rem;
  background: ${props => props.theme.background};
`
