import Contatos from '../../components/Contatos'
import { Container } from './style'

const ListaDeContatos = () => {
  return (
    <Container>
      <p>Contatos cadastrados</p>
      <Contatos nome={''} tel={''} email={''} id={0} />
    </Container>
  )
}

export default ListaDeContatos
