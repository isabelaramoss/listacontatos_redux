import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { BotaoSalvar } from '../../components/Contatos/style'
import * as enums from '../../util/enums/Contatos'
import { cadastrarContato } from '../../store/reducers/contatos'
import Container from '../ListaDeContatos/style'
import {
  NomeIcon,
  TelIcon,
  EmailIcon,
  TagIcon
} from '../../components/Contatos/style'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //transformar em campos controlados
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [tag, setTag] = useState(enums.Tag.TODOS)

  const cadastroContato = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isNameValid = /^[a-zA-Z ]+$/.test(nome)

    if (!isNameValid) return alert('Nome inválido! Digite apenas letras.')

    dispatch(
      cadastrarContato({
        nome,
        tel,
        email,
        tag
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <h3>Novo Contato</h3>
      <S.Form onSubmit={cadastroContato}>
        <div>
          <NomeIcon />
          <S.Infos
            type="text"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            placeholder="Nome do contato"
            required
          />
        </div>
        <div>
          <TelIcon />
          <S.Infos
            type="number"
            value={tel}
            onChange={({ target }) => setTel(target.value)}
            placeholder="Número do contato"
            required
          />
        </div>
        <div>
          <EmailIcon />
          <S.Infos
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="E-mail do contato (opcional)"
          />
        </div>
        <S.Opcoes>
          <S.Tags>
            <TagIcon />
            <S.TagContainer>
              {Object.values(enums.Tag).map((tag) => (
                <S.Opcao key={tag}>
                  <input
                    value={tag}
                    name="tag"
                    type="radio"
                    onChange={({ target }) => setTag(target.value as enums.Tag)}
                    id={tag}
                    defaultChecked={tag === enums.Tag.TODOS}
                  />{' '}
                  <label htmlFor="{tag}">{tag}</label>
                </S.Opcao>
              ))}
            </S.TagContainer>
          </S.Tags>
        </S.Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </S.Form>
    </Container>
  )
}

export default Formulario
