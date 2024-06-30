import styled from 'styled-components'
import { InfosInput } from '../../components/Contatos/style'

export const Form = styled.form`
  display: inline-grid;
  gap: 16px;
  margin-top: 16px;
  max-width: 574px;
  width: 100%;
  font-weight: bold;

  textarea {
    resize: none;
    margin: 24px 0;
  }
`

export const Infos = styled(InfosInput)`
  width: 93%;
  margin-left: 6px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`

export const Tags = styled.div`
  align-items: center;
  display: flex;
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
  margin-left: 6px;
`

export const TagContainer = styled.div`
  @media (max-width: 768px) {
    display: grid;
    margin: 0 auto;
    margin-left: 8px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 8px;
    grid-row-gap: 16px;
  }
`
