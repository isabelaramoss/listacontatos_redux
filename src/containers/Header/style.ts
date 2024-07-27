import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const HeaderContainer = styled.header`
  width: 100%;
  display: block;
  text-align: center;
  padding: 32px;
  background: linear-gradient(
    to right,
    rgba(110, 123, 191, 0.85),
    rgba(255, 91, 91, 0.85)
  );

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 24px;
`

export const Buscar = styled.input`
  border-radius: 16px;
  border: solid 0.4px #202020;
  background-color: #efeeee;
  padding: 8px 0;
  padding-left: 16px;
  padding-right: 72px;

  @media (max-width: 768px) {
    margin: 0;
  }
`

export const BotaoVoltar = styled.button`
  background-color: ${variaveis.roxo};
  color: ${variaveis.branco};
  padding: 12px 6px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid;

  &:hover {
    filter: saturate(150%);
    transition: filter 0.2s;
  }
`
