import { Header, Titulo } from './style'

const Cabecalho = () => {
  return (
    <Header>
      <Titulo>Contatos</Titulo>
      <form>
        <input placeholder="Buscar contato" />
        <button>Buscar</button>
      </form>
    </Header>
  )
}

export default Cabecalho
