import React from 'react'
import Slider from '@material-ui/core/Slider';

import * as S from './styledBg1'
import * as S2 from './styled'

class Background1 extends React.Component {
    state = {
        spanCount: 20,
        bgColor: '#3E1E68',
        circleColors: [
            '#583C87',
            '#E45A84',
            '#FFACAC',
        ],
        circleInputs: 3,
        size: 20,
        speed: 6,
    }

    buildSpans = () => {
        const spans = []
        const { spanCount, size, speed } = this.state
        for (let i = 0; i < spanCount; i++) {
            spans.push(
                <S.Span
                    key={i}
                    size={size}
                    speed={speed}
                ></S.Span>
            )
        }
        return spans
    }

    buildCircleInputs = () => {
        const inputs = []
        const { circleInputs, circleColors } = this.state
        for (let i = 0; i < circleInputs; i++) {
            inputs.push(<input
                type="color"
                value={circleColors[i]}
                onChange={e => {
                    circleColors[i] = e.target.value
                    this.setState({ circleColors })
                }}
            />)
        }
        return inputs
    }

    render() {
        const {
            spanCount,
            bgColor,
            circleColors,
            size,
            speed,
        } = this.state
        return (
            <div>
                <S2.Controls>
                    <h3>Controlls</h3>
                    <label>Count:</label>
                    <br />
                    <Slider
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={100}
                        value={spanCount}
                        onChange={(event, value) => this.setState({
                            spanCount: Number(value)
                        })}
                    />

                    <br /><br />
                    <label>Background Color:</label>
                    <br />
                    <input
                        type="color"
                        value={bgColor}
                        onChange={e => this.setState({ bgColor: e.target.value })}
                    />

                    <br /><br />
                    <label>Circle Colors:</label>
                    <br />
                    { this.buildCircleInputs() }
                    { /* TODO variable color array size */ }

                    <br/> <br/>
                    <label>Size:</label>
                    <br />
                    <input
                        type="number"
                        value={size}
                        onChange={e => this.setState({
                            size: Number(e.target.value)
                        })}
                    />

                    <br/> <br/>
                    <label>Speed:</label>
                    <br />
                    <input
                        type="number"
                        value={speed}
                        onChange={e => this.setState({
                            speed: Number(e.target.value)
                        })}
                    />

                    { /* TODO add source // https://codepen.io/Mamboleoo/pen/BxMQYQ */ }
                </S2.Controls>
                <S.Container
                    count={spanCount}
                    bgColor={bgColor}
                    colors={circleColors}
                    size={size}
                    speed={speed}
                >
                    { this.buildSpans() }
                </S.Container>
            </div>
        )
    }
}

export default Background1
