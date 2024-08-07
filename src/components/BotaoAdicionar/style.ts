import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const NovoContato = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.roxo};
  color: ${variaveis.branco};
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 40px;
  text-decoration: none;

  &:hover {
    filter: saturate(150%);
    transition: filter 0.2s;
  }
`
