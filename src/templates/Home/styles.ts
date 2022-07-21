import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`

export const Main = styled.main`
  max-width: 730px;
  width: 100%;

  color: ${({ theme: theme }) => theme.colors.background};
  margin: 0 1.6rem;
`
