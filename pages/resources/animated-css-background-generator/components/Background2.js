import React from 'react'
import Controls from './Controls'

import * as S from './styledBg2'

class Background2 extends React.Component {
    render() {
        return (
            <div>
                <Controls
                    source="https://codepen.io/mohaiman/pen/MQqMyo"
                    credit="Mohammad Abdul Mohaiman"
                >
                </Controls>

                <S.Container>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </S.Container>
            </div>
        )
    }
}

export default Background2
