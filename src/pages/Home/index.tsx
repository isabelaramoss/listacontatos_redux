import Header from '../../containers/Header'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <Header mostrarFiltros={true} />
    <ListaDeContatos />
  </>
)

export default Home
