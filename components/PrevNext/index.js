import React from 'react'
import Link from 'next/link'
import ArrowRight from '@material-ui/icons/ArrowRightAlt'

import weeklyData from '../../content/weekly'
import * as S from './styled'

const PrevNext = ({ postId }) => (
    <S.Container>
        { postId === 1 ? <span></span>
            : <S.Prev href={weeklyData.find(m => m.id === postId - 1).link}>
                <ArrowRight />
                Previous Weekly
            </S.Prev>
        }
        { postId < weeklyData.length &&
            <S.Next href={weeklyData.find(m => m.id === postId + 1).link}>
                Next Weekly
                <ArrowRight />
            </S.Next>
        }
    </S.Container>
)

export default PrevNext
