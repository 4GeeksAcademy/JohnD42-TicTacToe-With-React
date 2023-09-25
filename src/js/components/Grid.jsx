import React from 'react'

const Grid = (props) => {

    const clickHandler = props.clickHandler;
    const moves = props.moves;

    return (
        <div className="mx-auto">
            {moves.map((row,rowIdx) => {
                return (
                    <div className="row mx-auto gridRow">
                        {row.map((val,sqrIdx) => {
                            return (
                                <div className="col-4 border text-center mx-auto" onClick={clickHandler} id={`sqr${rowIdx*3 + sqrIdx+1}`}>
                                    {val}
                                </div>
                        )
                        })}
                    </div>
                )
                })}
        </div>
    )
}

export default Grid