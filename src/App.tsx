import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal from './styles'
import store from './store'
import Home from './pages/Home'

const rotas = createBrowserRouter([{ path: '/', element: <Home /> }])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App
