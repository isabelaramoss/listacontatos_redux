import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'
import ContatoClasse from '../../models/ContatoClasse'
import { alterarContato, removerContato } from '../../store/reducers/contatos'

type Props = ContatoClasse

const Contatos = ({
  nome: nomeOriginal,
  tel: telOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }

    if (telOriginal.length > 0) {
      setTel(telOriginal)
    }

    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [nomeOriginal, telOriginal, emailOriginal])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setTel(telOriginal)
    setEmail(emailOriginal)
  }

  function salvarEdicao() {
    dispatch(
      alterarContato({
        nome,
        tel,
        email,
        id
      })
    )
    setEstaEditando(false)
  }

  return (
    <S.Card>
      <div>
        {estaEditando ? (
          <>
            <S.InfosContato>
              <S.InfosInput
                type="text"
                value={nome}
                onChange={({ target }) => setNome(target.value)}
                disabled={!estaEditando}
              />
            </S.InfosContato>

            <S.InfosContato>
              <S.InfosInput
                type="text"
                value={tel}
                onChange={({ target }) => setTel(target.value)}
                disabled={!estaEditando}
              />
            </S.InfosContato>

            <S.InfosContato>
              <S.InfosInput
                type="text"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                disabled={!estaEditando}
              />
            </S.InfosContato>
          </>
        ) : (
          <>
            <S.InfosContato>
              <S.NomeIcon />
              {nomeOriginal}
            </S.InfosContato>
            <S.InfosContato>
              <S.TelIcon />
              {telOriginal}
            </S.InfosContato>
            <S.InfosContato>
              <S.EmailIcon />
              {emailOriginal}
            </S.InfosContato>
          </>
        )}
      </div>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={salvarEdicao}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEditar>
            <S.BotaoCancelarRemover
              onClick={() => dispatch(removerContato(id))}
            >
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contatos
