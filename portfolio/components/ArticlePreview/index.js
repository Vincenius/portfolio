import React from 'react'
import Link from 'next/link'
import * as S from './styled'

const ArticlePreview = ({
  date,
  link,
  headline,
  description
}) => {
  const d = new Date(date)

  return (
    <S.Container>
      <header>
        <S.Time datetime={d.toISOString()}>{date}</S.Time>
        <S.Headline>
          <Link href={link}><a>{headline}</a></Link>
        </S.Headline>
      </header>
      <p>{description}</p>
      <Link href={link}>
        <S.ReadMore>
          Read more
        </S.ReadMore>
      </Link>
    </S.Container>
  )
}

export default ArticlePreview
