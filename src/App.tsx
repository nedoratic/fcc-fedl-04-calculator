import { useState } from 'react';
import './App.css';

function App() {
	const buttonPress = (symbol: string) => {
		console.log(symbol);
	};

	return (
		<>
			<div className="container">
				<h1>Calculator</h1>
				<div id="calculator">
					<div id="display">
						<div id="answer"></div>
						<div id="expression"></div>
					</div>
					<button className="light-gray" id="clear" onClick={() => buttonPress('clear')}>
						AC
					</button>
					<button className="light-gray" id="negative" onClick={() => buttonPress('negative')}>
						+/-
					</button>
					<button className="light-gray" id="percentage" onClick={() => buttonPress('percentage')}>
						%
					</button>
					<button className="blue" id="divide" onClick={() => buttonPress('/')}>
						/
					</button>
					<button className="gray" id="seven" onClick={() => buttonPress('7')}>
						7
					</button>
					<button className="gray" id="eight" onClick={() => buttonPress('8')}>
						8
					</button>
					<button className="gray" id="nine" onClick={() => buttonPress('9')}>
						9
					</button>
					<button className="blue" id="multiply" onClick={() => buttonPress('*')}>
						x
					</button>
					<button className="gray" id="four" onClick={() => buttonPress('4')}>
						4
					</button>
					<button className="gray" id="five" onClick={() => buttonPress('5')}>
						5
					</button>
					<button className="gray" id="six" onClick={() => buttonPress('6')}>
						6
					</button>
					<button className="blue" id="subtract" onClick={() => buttonPress('-')}>
						-
					</button>
					<button className="gray" id="one" onClick={() => buttonPress('1')}>
						1
					</button>
					<button className="gray" id="two" onClick={() => buttonPress('2')}>
						2
					</button>
					<button className="gray" id="three" onClick={() => buttonPress('3')}>
						3
					</button>
					<button className="blue" id="add" onClick={() => buttonPress('+')}>
						+
					</button>
					<button className="gray" id="zero" onClick={() => buttonPress('0')}>
						0
					</button>
					<button className="gray" id="decimal" onClick={() => buttonPress('.')}>
						.
					</button>
					<button className="blue" id="equals" onClick={() => buttonPress('=')}>
						=
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
