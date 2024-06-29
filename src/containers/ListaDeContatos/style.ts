import { styled } from 'styled-components'

export const Container = styled.div`
  margin: 0 8rem 0;
  width: 100%;
  margin-top: 32px;

  @media (max-width: 768px) {
    padding: 0px 40px;
    margin: 0 auto;
    margin-top: 32px;
  }
`

export const subTitulo = styled.p`
  font-size: 9px;
`

export default Container
