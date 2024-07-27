import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './style'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

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
          <S.Buscar
            type="text"
            placeholder="Procurar contato"
            value={termo}
            onChange={(e) => dispatch(alterarTermo(e.target.value))}
          />
        </>
      ) : (
        <>
          <div>
            <S.Titulo>Meus contatos</S.Titulo>
          </div>
          <S.BotaoVoltar onClick={() => navigate('/')}>
            Voltar a contatos salvos
          </S.BotaoVoltar>
        </>
      )}
    </S.HeaderContainer>
  )
}

export default Header
