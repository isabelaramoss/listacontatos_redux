import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ContatoClasse from '../../models/ContatoClasse'

type ContatoState = {
  itens: ContatoClasse[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'Isabela Ramos',
      tel: '11 998765432',
      email: 'isabela@email.com',
      id: 1
    },
    {
      nome: 'Victor',
      tel: '11 97654-3210',
      email: 'victor@email.com',
      id: 2
    },
    {
      nome: 'Nicole',
      tel: '21 934567890',
      email: '',
      id: 3
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    cadastrarContato: (
      state,
      action: PayloadAction<Omit<ContatoClasse, 'id'>>
    ) => {
      const contatoJaExiste = state.itens.find(
        (c) => c.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com este nome!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(novoContato)
      }
    },
    alterarContato: (state, action: PayloadAction<ContatoClasse>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    removerContato: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { cadastrarContato, alterarContato, removerContato } =
  contatoSlice.actions
export default contatoSlice.reducer
