import React from 'react'
import Link from 'next/link'
import * as S from './styled'

const ArticlePreview = ({
  date,
  link,
  headline,
  description,
  type,
  previewImage,
}) => {
  const d = new Date(date)

  return (
    <S.Container>
      { previewImage &&
        <Link href={link}>
          <a><S.PreviewImage src={previewImage} alt={headline} /></a>
        </Link>
      }
      <div>
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
      </div>
    </S.Container>
  )
}

export default ArticlePreview
