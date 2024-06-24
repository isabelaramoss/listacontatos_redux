export default class ContatoClasse {
  nome: string
  tel: string
  email?: string
  id: number

  constructor(nome: string, tel: string, email: string, id: number) {
    this.nome = nome
    this.tel = tel
    this.email = email
    this.id = id
  }
}
