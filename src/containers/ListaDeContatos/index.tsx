import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contatos from '../../components/Contatos'
import * as S from './style'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'tag') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.tag === valor
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''

    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}` : ''

    if (criterio === 'todos') {
      mensagem = `${quantidade} contato(s) encontrado(s) como: todos ${complementacao}`
    } else {
      mensagem = `${mensagem} contato(s) encontrado(s) como: ${`${criterio} - ${valor}`}${complementacao}`
    }

    return mensagem
  }

  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <S.Container>
      <p>Contatos cadastrados</p>
      <S.subTitulo>{mensagem}</S.subTitulo>
      <ul>
        {contatos.map((t) => (
          <li key={t.nome}>
            <Contatos
              nome={t.nome}
              tel={t.tel}
              email={t.email}
              tag={t.tag}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaDeContatos
