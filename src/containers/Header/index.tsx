import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import FiltroTag from '../../components/FiltroTag'
import * as S from './style'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../util/enums/Contatos'

type Props = {
  mostrarFiltros: boolean
}

const Header = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.HeaderContainer>
      {mostrarFiltros ? (
        <>
          <div>
            <S.Titulo>Meus contatos</S.Titulo>
          </div>
          <S.PesquisaContainer>
            <S.Buscar
              type="text"
              placeholder="Procurar contato"
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
            <FiltroCard />
            <FiltroTag legenda="Todos" criterio="todos" />
            <FiltroTag legenda="Emergência" valor={enums.Tag.EMERGENCIA} />
            <FiltroTag legenda="Família" />
            <FiltroTag legenda="Amigos" />
            <FiltroTag legenda="Trabalho" />
          </S.PesquisaContainer>
        </>
      ) : (
        <S.BotaoVoltar onClick={() => navigate('/')}>
          Voltar a Meus Contatos
        </S.BotaoVoltar>
      )}
    </S.HeaderContainer>
  )
}

export default Header
