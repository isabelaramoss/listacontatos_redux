import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Contatos from '../../components/Contatos'
import * as S from './style'
import BotaoAdicionar from '../../components/BotaoAdicionar'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  const contatos = filtraContatos()

  return (
    <S.Container>
      <ul>
        {contatos.map((t) => (
          <li key={t.nome}>
            <Contatos nome={t.nome} tel={t.tel} email={t.email} id={t.id} />
          </li>
        ))}
      </ul>
      <BotaoAdicionar />
    </S.Container>
  )
}

export default ListaDeContatos
