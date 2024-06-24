import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  padding: 16px;
  justify-content: space-between;
  background-color: #eeee;
  border: solid 1px #a066ff;
  border-radius: 16px;
  margin-top: 24px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 4px rbga(0, 0, 0, 0.1);
`

export const InfosContato = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const InfosInput = styled.input`
  color: #010101;
  font-size: 20px;
  background-color: none;
  outline: none;
`

export const TagContato = styled.span`
  font-style: italic;
`

export const BarraAcoes = styled.div`
  display: flex;
  gap: 1rem;
`

export const Botoes = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border-radius: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    filter: saturate(150%);
    transition: filter 0.2s;
  }
`

export const BotaoEditar = styled(Botoes)`
  background-color: #6e7bbf;
`

export const BotaoSalvar = styled(Botoes)`
  background-color: #dff0e2;
`

export const BotaoCancelarRemover = styled(Botoes)`
  background-color: #ff5b5b;
`

/* margin: 0 auto;
max-width: 64rem;
width: 100%;
height: 100vh; */
