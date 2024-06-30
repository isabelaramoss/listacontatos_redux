import {
  BsFillPersonFill,
  BsTelephoneFill,
  BsEnvelopeFill,
  BsHash
} from 'react-icons/bs'
//<BsFillPersonFill />  <BsTelephoneFill /> <BsEnvelopeFill /> <BsHash />
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  display: flex;
  width: 70%;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  background-color: ${variaveis.cinza_claro};
  border: solid 1px ${variaveis.lilas};
  border-radius: 16px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    display: block;
    height: auto;
    width: 100%;
    max-width: 360px;
  }
`

export const InfosContato = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const InfosInput = styled.input`
  color: ${variaveis.preto};
  font-size: 20px;
  background-color: none;
  outline: none;
`

export const TagContato = styled.span`
  font-style: italic;
  display: flex;
  align-items: center;
`

export const BarraAcoes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;

  @media (max-width: 768px) {
    width: 50%;
    padding: 4px 0px;
    margin: auto;
    margin-top: 8px;
  }
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
  margin-bottom: 8px;

  @media (max-width: 768px) {
    margin-top: 4px;
  }
`

export const BotaoSalvar = styled(Botoes)`
  background-color: ${variaveis.cianeto};
  margin-bottom: 8px;

  @media (max-width: 768px) {
    margin-top: 4px;
  }
`

export const BotaoCancelarRemover = styled(Botoes)`
  background-color: ${variaveis.vermelho};
`

export const NomeIcon = styled(BsFillPersonFill)`
  font-size: 20px;
  margin-right: 10px;
`
export const TelIcon = styled(BsTelephoneFill)`
  font-size: 20px;
  margin-right: 10px;
`

export const EmailIcon = styled(BsEnvelopeFill)`
  font-size: 20px;
  margin-right: 10px;
`

export const TagIcon = styled(BsHash)`
  font-size: 20px;
  margin-right: 10px;
`
