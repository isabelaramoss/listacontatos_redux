import FiltroCard from '../../components/FiltroCard'
import FiltroTag from '../../components/FiltroTag'
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
          <FiltroTag ativo legenda="Todos" />
          <FiltroTag legenda="Emergência" />
          <FiltroTag legenda="Família" />
          <FiltroTag legenda="Amigos" />
          <FiltroTag legenda="Trabalho" />
        </S.PesquisaContainer>
      </S.HeaderContainer>
    </>
  )
}

export default Header
