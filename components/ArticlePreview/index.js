import React from 'react'
import Link from 'next/link'
import * as S from './styled'

const ArticlePreview = ({
  date,
  link,
  headline,
  description,
  type,
}) => {
  const d = new Date(date)

  return (
    <S.Container>
      <header>
        { type &&
          <S.Type highlight={type==='Resource'}>
            <b>{type}</b> -&nbsp;
          </S.Type>
        }
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
