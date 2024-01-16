import { useState } from 'react';
import './App.css';

function App() {
	const [answer, setAnswer] = useState('0');
	const [expression, setExpression] = useState('0');
	const et = expression.trim();

	const isOperator = (symbol: string) => {
		return /[*/+-]/.test(symbol);
	};

	const buttonPress = (symbol: string) => {
		if (symbol === 'clear') {
			setAnswer('');
			setExpression('0');
		} else if (symbol === 'negative') {
			if (answer === '') return;
			setAnswer(answer.toString().charAt(0) === '-' ? answer.slice(1) : '-' + answer);
		} else if (symbol === 'percentage') {
			if (answer === '') return;
			setAnswer((parseFloat(answer) / 100).toString());
		} else if (isOperator(symbol)) {
			setExpression(et + ' ' + symbol + ' ');
		} else if (symbol === '=') {
			calculate();
		} else if (symbol === '0') {
			if (expression.charAt(0) !== '0') {
				setExpression(expression + symbol);
			}
		} else if (symbol === '.') {
			const lastNumber = expression.split(/[-+/*]/g).pop();
			if (!lastNumber) return;
			console.log('lastNumber :>> ', lastNumber);
			if (lastNumber?.includes('.')) return;
			setExpression(expression + symbol);
		} else {
			if (expression.charAt(0) === '0') {
				setExpression(expression.slice(1) + symbol);
			} else {
				setExpression(expression + symbol);
			}
		}
	};

	const calculate = () => {
		if (isOperator(et.charAt(et.length - 1))) return;
		const parts = et.split(' ');
		const newParts = [];
		for (let i = parts.length - 1; i >= 0; i--) {
			if (['*', '/', '+'].includes(parts[i]) && isOperator(parts[i - 1])) {
				newParts.unshift(parts[i]);
				let j = 0;
				let k = i - 1;
				while (isOperator(parts[k])) {
					k--;
					j++;
				}
				i -= j;
			} else {
				newParts.unshift(parts[i]);
			}
		}
		const newExpression = newParts.join(' ');
		if (isOperator(newExpression.charAt(0))) {
			setAnswer(eval(answer + newExpression) as string);
		} else {
			setAnswer(eval(newExpression) as string);
		}
		setExpression('');
	};

	return (
		<>
			<div className="container">
				<h1>Calculator</h1>
				<div id="calculator">
					<div id="display">
						<div id="answer">{answer}</div>
						<div id="expression">{expression}</div>
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
