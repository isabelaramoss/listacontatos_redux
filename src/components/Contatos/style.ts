import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  width: 100%;
  padding: 16px;
  justify-content: space-between;
  background-color: ${variaveis.cinza_claro};
  border: solid 1px ${variaveis.lilas};
  border-radius: 16px;
  margin-top: 24px;
  margin-bottom: 16px;
  box-shadow: 0px 4px 4px rbga(0, 0, 0, 0.1);
`

export const InfosContato = styled.div`
  display: flex;
  align-items: center;
`

export const InfosInput = styled.input`
  color: ${variaveis.preto};
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
  color: ${variaveis.branco};
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
  background-color: ${variaveis.roxo};
`

export const BotaoSalvar = styled(Botoes)`
  background-color: ${variaveis.cianeto};
`

export const BotaoCancelarRemover = styled(Botoes)`
  background-color: ${variaveis.vermelho};
`

/* margin: 0 auto;
max-width: 64rem;
width: 100%;
height: 100vh; */
