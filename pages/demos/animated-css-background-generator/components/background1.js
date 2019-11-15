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
        speed: 45,
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
                    { /* todo only re-render when finished dragging */ }
                    <Slider
                        aria-labelledby="count-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={100}
                        value={spanCount}
                        onChange={(event, value) => this.setState({
                            spanCount: Number(value)
                        })}
                        onChangeCommitted={() => {
                            // TODO
                        }}
                    />

                    { /* todo only re-render when finished dragging */ }
                    <label>Size:</label>
                    <br />
                    <Slider
                        aria-labelledby="size-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={50}
                        value={size}
                        onChange={(event, value) => this.setState({
                            size: Number(value)
                        })}
                    />

                    <label>Average Speed:</label>
                    <br />
                    <Slider
                        aria-labelledby="speed-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={1}
                        max={50}
                        value={speed}
                        onChange={(event, value) => this.setState({
                            speed: Number(value)
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
