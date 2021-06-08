import { useState } from 'react';

const App = () => {
	// create a state to hold the currently active/focused input element
	const [currentlyFocusedInput, setCurrentlyFocusedInput] = useState(null);

	const buttonHandler = (e) => {
		setCurrentlyFocusedInput((currFoc) => {
			let val = currFoc.value + e.target.value;
			currFoc.value = val;
			return currFoc;
		});
		currentlyFocusedInput.focus();
	};

	return (
		<div className='App'>
			<div className='login-form'>
				<h2>Login</h2>
				<input
					type='text'
					placeholder='enter username'
					onFocus={(e) => setCurrentlyFocusedInput(e.target)}
				/>
				<input
					type='text'
					placeholder='enter password'
					onFocus={(e) => setCurrentlyFocusedInput(e.target)}
				/>
			</div>

			<div className='keyboard-container'>
				<div className='key-row'>
					<button value='1' onClick={buttonHandler}>
						1
					</button>
					<button value='2' onClick={buttonHandler}>
						2
					</button>
					<button value='3' onClick={buttonHandler}>3</button>
					<button value='4' onClick={buttonHandler}>4</button>
					<button value='5' onClick={buttonHandler}>5</button>
					<button value='6' onClick={buttonHandler}>6</button>
					<button value='7' onClick={buttonHandler}>7</button>
					<button value='8' onClick={buttonHandler}>8</button>
					<button value='9' onClick={buttonHandler}>9</button>
					<button value='0' onClick={buttonHandler}>0</button>
				</div>
				<div className='key-row'>
					<button value='Q' onClick={buttonHandler}>Q</button>
					<button value='W' onClick={buttonHandler}>W</button>
					<button value='E' onClick={buttonHandler}>E</button>
					<button value='R' onClick={buttonHandler}>R</button>
					<button value='T' onClick={buttonHandler}>T</button>
					<button value='Y' onClick={buttonHandler}>Y</button>
					<button value='U' onClick={buttonHandler}>U</button>
					<button value='I' onClick={buttonHandler}>I</button>
					<button value='O' onClick={buttonHandler}>O</button>
					<button value='P' onClick={buttonHandler}>P</button>
				</div>
				<div className='key-row'>
					<button value='A' onClick={buttonHandler}>A</button>
					<button value='S' onClick={buttonHandler}>S</button>
					<button value='D' onClick={buttonHandler}>D</button>
					<button value='F' onClick={buttonHandler}>F</button>
					<button value='G' onClick={buttonHandler}>G</button>
					<button value='H' onClick={buttonHandler}>H</button>
					<button value='J' onClick={buttonHandler}>J</button>
					<button value='K' onClick={buttonHandler}>K</button>
					<button value='L' onClick={buttonHandler}>L</button>
				</div>
				<div className='key-row'>
					<button>Shift</button>
					<button value='Z' onClick={buttonHandler}>Z</button>
					<button value='X' onClick={buttonHandler}>X</button>
					<button value='C' onClick={buttonHandler}>C</button>
					<button value='V' onClick={buttonHandler}>V</button>
					<button value='B' onClick={buttonHandler}>B</button>
					<button value='N' onClick={buttonHandler}>N</button>
					<button value='M' onClick={buttonHandler}>M</button>
					<button className='btn-large'>Backspace</button>
				</div>
				<div className='key-row'>
					<button className='btn-full'></button>
				</div>
			</div>
		</div>
	);
};

export default App;
