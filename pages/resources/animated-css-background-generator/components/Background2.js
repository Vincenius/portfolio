import React from 'react'
import Controls from './Controls'
import Slider from '@material-ui/core/Slider';

import * as S from './styledBg2'

class Background2 extends React.Component {
    // TODO background
    state = {
        count: 10,
        size: [100, 200],
        speed: 25,
    }

    buildList = () => {
        const { count } = this.state
        const items = []

        for (let i = 0; i < count; i++) {
            items.push(
                <li></li>
            )
        }
        return items
    }

    render() {
        const {
            count,
            size,
            speed,
        } = this.state

        return (
            <div>
                <Controls
                    source="https://codepen.io/mohaiman/pen/MQqMyo"
                    credit="Mohammad Abdul Mohaiman"
                >
                    <label>Count:</label>
                    <Slider
                        aria-labelledby="count-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={50}
                        value={count}
                        onChange={(event, value) => this.setState({
                            count: Number(value)
                        })}
                    />

                    <label>Size:</label>
                    <Slider
                        aria-labelledby="size-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={500}
                        value={size}
                        onChange={(event, value) => this.setState({
                            size: value
                        })}
                    />

                    <label>Speed:</label>
                    <Slider
                        aria-labelledby="count-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={50}
                        value={speed}
                        onChange={(event, value) => this.setState({
                            speed: Number(value)
                        })}
                    />
                </Controls>

                <S.Container
                    count={count}
                    size={size}
                    speed={speed}
                >
                    { this.buildList() }
                </S.Container>
            </div>
        )
    }
}

export default Background2
