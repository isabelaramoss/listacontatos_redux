import styled from 'styled-components'
import { InfosInput } from '../../components/Contatos/style'

export const ContainerForm = styled.div`
  margin: auto;
  width: 100%;
  display: grid;
  justify-content: center;
  height: 100%;
  align-content: center;
  margin-top: 32px;
`

export const Form = styled.form`
  display: inline-grid;
  gap: 16px;
  margin-top: 16px;
  max-width: 574px;
  width: 110%;
  font-weight: bold;

  textarea {
    resize: none;
    margin: 24px 0;
  }
`

export const Infos = styled(InfosInput)`
  width: 90%;
  margin-left: 6px;
`
export const Items = styled.div`
  display: flex;
  align-items: center;
`
