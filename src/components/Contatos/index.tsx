import { useEffect, useState } from 'react'
import * as S from './style'
import ContatoClasse from '../../models/ContatoClasse'
import { useDispatch } from 'react-redux'

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

  function salvarEdicao() {
    dispatch(
      editar({
        nome,
        tel,
        email,
        id
      })
    )
  }

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setTel(telOriginal)
    setEmail(emailOriginal)
  }

  //function alteraTag(e: ChangeEvent<HTMLInputElement>){ }

  return (
    <S.Card>
      <S.InfosContato>
        <div>
          <S.InfosInput
            type="text"
            value={nome}
            onChange={({ target }) => setNome(target.value)}
            disabled={!estaEditando}
          />
          <S.InfosInput
            type="text"
            value={tel}
            onChange={({ target }) => setTel(target.value)}
            disabled={!estaEditando}
          />
          <S.InfosInput
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            disabled={!estaEditando}
          />
          <S.TagContato parametro="tag" tag={tag}>
            {tag}
          </S.TagContato>
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
              <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                Remover
              </S.BotaoCancelarRemover>
            </>
          )}
        </S.BarraAcoes>
      </S.InfosContato>
    </S.Card>
  )
}

export default Contatos
