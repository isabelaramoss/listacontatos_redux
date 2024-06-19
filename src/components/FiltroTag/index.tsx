import * as S from './style'

export type Props = {
  ativo?: boolean
  legenda: string
}

const FiltroTag = ({ ativo, legenda }: Props) => {
  return <S.TagCard ativo={ativo}>{legenda}</S.TagCard>
}

export default FiltroTag
