import FiltroCard from '../../components/FiltroCard'
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
        </S.PesquisaContainer>
      </S.HeaderContainer>
    </>
  )
}

export default Header
