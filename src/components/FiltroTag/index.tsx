import * as S from './style'

export type Props = {
  ativo?: boolean
  criterio?: 'tag' | 'todos'
  valor?: string
  legenda: string
}

const FiltroTag = ({ ativo, legenda }: Props) => {
  return <S.TagCard ativo={ativo}>{legenda}</S.TagCard>
}

export default FiltroTag
