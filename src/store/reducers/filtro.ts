import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../util/enums/Contatos'

type FiltroState = {
  termo?: string
  criterio: 'tag' | 'todos'
  valor?: enums.Tag
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarFiltro, alterarTermo } = filtroSlice.actions
export default filtroSlice.reducer
