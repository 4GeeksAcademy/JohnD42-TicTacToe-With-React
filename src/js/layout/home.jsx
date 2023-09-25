import React, { useState } from "react";

import StartOverBtn from '../components/StartOverBtn.jsx'
import Grid from '../components/Grid.jsx'
import ChooseWeapon from '../components/ChooseWeapon.jsx'

//create your first component

const Home = () => {

	const [turn, setTurn] = useState('X')
	const [moves, setMoves] = useState([['','',''],['','',''],['','','']])
	const [gameWinner, setGameWinner] = useState(null)
	const [gameOver, setGameOver] = useState(false)
	const [gameStarted, setGameStarted] = useState(false)

	const startOver = () => {
		console.log('starting over');
		setMoves([['','',''],['','',''],['','','']])
		setGameOver(false)
		setTurn('X')
	}

	const turnChanger = () => {
		turn === 'X' ? setTurn('O') : setTurn('X');
	}

	const clickHandler = (e) => {
		console.log(...moves[0],...moves[1],...moves[2])
		if(e.target.innerHTML === '' && gameOver !== true) {
			const weapon = turn
			const sqrID = e.target.id;
			 
			if(sqrID === 'sqr1') {
				setMoves([[weapon, moves[0][1],moves[0][2]],moves[1],moves[2]])
				if(moves[0][1] === weapon && moves[0][2] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[1][0] === weapon && moves[2][0] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[1][1] === weapon && moves[2][2] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
			}
			if(sqrID === 'sqr2') {
				setMoves([[moves[0][0],weapon, moves[0][2]],moves[1],moves[2]])
				if(moves[0][0] === weapon && moves[0][2] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[1][1] === weapon && moves[2][1] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
			}
			if(sqrID === 'sqr3') {
				setMoves([[moves[0][0],moves[0][1], weapon],moves[1],moves[2]])
				if(moves[0][0] === weapon && moves[0][1] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[1][2] === weapon && moves[2][2] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[1][1] === weapon && moves[2][0] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
			}
			if(sqrID === 'sqr4') {
				setMoves([moves[0],[weapon, moves[1][1],moves[1][2]],moves[2]])
				if(moves[0][0] === weapon && moves[2][0] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[1][1] === weapon && moves[1][2] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
			}
			if(sqrID === 'sqr5') {
				setMoves([moves[0],[moves[1][0], weapon, moves[1][2]],moves[2]])
				if(moves[0][1] === weapon && moves[2][1] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[1][0] === weapon && moves[1][2] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[0][0] === weapon && moves[2][2] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[0][2] === weapon && moves[2][0] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
			}
			if(sqrID === 'sqr6') {
				setMoves([moves[0],[moves[1][0],moves[1][1], weapon],moves[2]])
				if(moves[1][0] === weapon && moves[1][1] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[0][2] === weapon && moves[2][2] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
			}
			if(sqrID === 'sqr7') {
				setMoves([moves[0], moves[1], [weapon, moves[2][1],moves[2][2]],])
				if(moves[0][0] === weapon && moves[1][0] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[2][1] === weapon && moves[2][2] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[0][2] === weapon && moves[1][1] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
			}
			if(sqrID === 'sqr8') {
				setMoves([moves[0], moves[1], [moves[2][0], weapon, moves[2][2]],])
				if(moves[2][0] === weapon && moves[2][2] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[1][1] === weapon && moves[0][1] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
			}
			if(sqrID === 'sqr9') {
				setMoves([moves[0], moves[1], [moves[2][0], moves[2][1], weapon],])
				if(moves[2][0] === weapon && moves[2][1] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[0][2] === weapon && moves[1][2] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
				if(moves[0][0] === weapon && moves[1][1] === weapon) {
					setGameOver(true);
					setGameWinner(weapon);
				}
			}
			if(gameOver === false) {
				turnChanger();
			}
		}
	}
	const btnHandler = (e) => {
		setTurn(e.target.innerHTML);
		setGameStarted(true);
	}

	return (
		<div className="text-center container mx-auto">
			<div className="row mx-auto g-0">
				<div className="col-3 mx-auto">
					<h3><strong>TicTacToe in React.js</strong></h3>
					<h3>
						{gameOver === true ? `${gameWinner} wins!` : gameStarted === true ? `It is ${turn}'s turn!` : 'Pick A Weapon'}
					</h3>
					<StartOverBtn startOver={startOver}/>
					{gameStarted === true ? <Grid clickHandler={clickHandler} moves={moves}/> : <ChooseWeapon btnHandler={btnHandler}/>}
				</div>
			</div>
		</div>
	);
};

export default Home;
