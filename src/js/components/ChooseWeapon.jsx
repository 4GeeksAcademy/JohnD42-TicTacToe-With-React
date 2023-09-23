import React from 'react'

const ChooseWeapon = (props) => {
    const btnHandler = props.btnHandler;
    return (
        <div className="row g-0">
            <div className="col-12">
                <form className="mx-auto">
                    <h4><strong>CHOOSE YOUR WEAPON</strong></h4>
                    <div className="row g-0 mx-auto">
                        <div className="col-6">
                            <input type="text" placeholder="Player 1 name"></input>
                        </div>
                        <div className="col-6">
                            <input type="text" placeholder="Player 2 name"></input>
                        </div>
                    </div>
                    <div className="row g-0 mx-auto">
                        <div className="col-6">
                            <button className="btn chooseWpnBtn xBtn" onClick={btnHandler}>X</button>
                        </div>
                        <div className="col-6">
                        <button className="btn chooseWpnBtn oBtn" onClick={btnHandler}>O</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChooseWeapon