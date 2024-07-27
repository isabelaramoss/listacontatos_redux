import { styled } from 'styled-components'

export const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 700px;
  height: 100%;
  align-content: center;
  margin-top: 32px;

  @media (max-width: 768px) {
    padding: 0px 40px;
    margin: 0 auto;
    margin-top: 32px;
  }
`

export const listContatos = styled.li`
  display: flex;
  justify-content: center;
`

export const subTitulo = styled.p`
  font-size: 9px;
`

export default Container
