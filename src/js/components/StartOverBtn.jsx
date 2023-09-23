import React from 'react'

const StartOverBtn = (props) => {

    const startOver = props.startOver
    return (
        <button className="btn btn-light my-3" onClick={startOver}>Start over</button>
    )
}

export default StartOverBtn