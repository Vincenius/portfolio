import React from 'react'
import * as S from './styledBg1'

class Background1 extends React.Component {
    state = {
        spanCount: 20,
    }

    render() {
        return (
            <S.Container>
                {[...Array(this.state.spanCount)].map((x, i) =>
                    <S.Span key={i}></S.Span>
                )}
            </S.Container>
        )
    }
}

export default Background1
