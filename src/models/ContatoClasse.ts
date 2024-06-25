import * as enums from '../util/enums/Contatos'

export default class ContatoClasse {
  nome: string
  tel: string
  email: string
  tag: enums.Tag
  id: number

  constructor(
    nome: string,
    tel: string,
    email: string,
    id: number,
    tag: enums.Tag
  ) {
    this.nome = nome
    this.tel = tel
    this.email = email
    this.tag = tag
    this.id = id
  }
}
