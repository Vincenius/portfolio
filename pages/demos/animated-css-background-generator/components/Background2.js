import React from 'react'
import Controls from './Controls'

class Background2 extends React.Component {
    render() {
        return (
            <div>
                <Controls
                    source="todo"
                    credit="todo"
                >
                    <label>Count:</label>
                </Controls>
                TODO
            </div>
        )
    }
}

export default Background2
