import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegenda = Omit<Props, 'legenda'>

export const TagCard = styled.div<PropsSemLegenda>`
  font-size: 10px;
  font-style: italic;
  padding: 6px 8px;
  background-color: ${(props) => (props.ativo ? '#6E7BBF' : '#e4e3e3')};
  color: ${(props) => (props.ativo ? '#fff' : '#454545')};
  margin-right: 12px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
`
