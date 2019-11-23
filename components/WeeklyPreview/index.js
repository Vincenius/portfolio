import React from 'react'
import Link from 'next/link'
import * as S from './styled'

const ArticlePreview = ({
    date,
    number,
    description,
}) => {
    const d = new Date(date)
    const headline = `Weekly #${number}`
    const link = `/weekly/${number}`
    const img = `/weekly/${number}.jpg`

    return (
        <S.Container>
            <header>
                <S.Headline>
                    <Link href={link}><a>{headline}</a></Link>
                </S.Headline>
                <S.Time datetime={d.toISOString()}>{date}</S.Time>
            </header>
            <Link href={link}><a>
                <S.Image src={img} alt={`number image ${number}`} />
            </a></Link>
            <p>{description}</p>
        </S.Container>
    )
}

export default ArticlePreview
