import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { BotaoSalvar } from '../../components/Contatos/style'
import { cadastrarContato } from '../../store/reducers/contatos'
import { NomeIcon, TelIcon, EmailIcon } from '../../components/Contatos/style'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //transformar em campos controlados
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  const cadastroContato = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isNameValid = /^[a-zA-Z ]+$/.test(nome)

    if (!isNameValid) return alert('Nome inválido! Digite apenas letras.')

    dispatch(
      cadastrarContato({
        nome,
        tel,
        email
      })
    )
    navigate('/')
  }

  return (
    <S.ContainerForm>
      <h3>Novo Contato</h3>
      <S.Form onSubmit={cadastroContato}>
        <S.Items>
          <NomeIcon />
          <S.Infos
            type="text"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            placeholder="Nome do contato"
            required
          />
        </S.Items>
        <S.Items>
          <TelIcon />
          <S.Infos
            type="tel"
            value={tel}
            onChange={({ target }) => setTel(target.value)}
            placeholder="Número do contato"
            required
          />
        </S.Items>
        <S.Items>
          <EmailIcon />
          <S.Infos
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="E-mail do contato (opcional)"
          />
        </S.Items>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </S.Form>
    </S.ContainerForm>
  )
}

export default Formulario
