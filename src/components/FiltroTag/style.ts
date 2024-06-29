import styled from 'styled-components'
import { Props } from '.'
import variaveis from '../../styles/variaveis'

type PropsSemLegenda = Omit<Props, 'legenda'>

export const TagCard = styled.div<PropsSemLegenda>`
  font-size: 10px;
  font-style: italic;
  padding: 6px 8px;
  background-color: ${(props) =>
    props.ativo ? `${variaveis.roxo}` : `${variaveis.cinza_claro3}`};
  color: ${(props) =>
    props.ativo ? `${variaveis.branco}` : `${variaveis.cinza_escuro}`};
  margin-right: 12px;
  border-radius: 16px;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 8px auto;
    width: 40%;
    justify-content: center;
    display: none;
  }
`
