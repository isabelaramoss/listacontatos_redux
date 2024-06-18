import * as S from './style'

export type Props = {
  ativo?: boolean
}

const FiltroTag = (props: Props) => {
  return <S.TagCard ativo={props.ativo}>Família</S.TagCard>
}

export default FiltroTag
