import FiltroCard from '../../components/FiltroCard'
import FiltroTag from '../../components/FiltroCard/FiltroTag'
import * as S from './style'

const Header = () => {
  return (
    <>
      <S.HeaderContainer>
        <div>
          <S.Titulo>Meus contatos</S.Titulo>
        </div>
        <S.PesquisaContainer>
          <S.Buscar type="text" placeholder="Procurar contato" />
          <FiltroCard />
          <FiltroTag />
          <FiltroTag />
          <FiltroTag />
          <FiltroTag />
        </S.PesquisaContainer>
      </S.HeaderContainer>
    </>
  )
}

export default Header
