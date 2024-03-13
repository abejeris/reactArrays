import { useState } from 'react';

function App() {
	const initial_value = ['A', 'B', 'C'];
	const [array, setArray] = useState(initial_value);
	const [value, setValue] = useState('');

	function removeFirstElement() {
		setArray((currentArray) => {
			return currentArray.slice(1);
		});
	}
	function removeSpecificLetter(letter) {
		const index = array.indexOf(letter);
		if (index > -1) {
			setArray((currentArray) => {
				return currentArray.filter((el) => el !== letter);
			});
		}
	}

	function addNewLetterToStart(letter) {
		setArray((currentArray) => {
			return [letter, ...currentArray];
		});
	}
	function addNewLetterToEnd(letter) {
		setArray((currentArray) => {
			return [...currentArray, letter];
		});
	}

	function clearArray() {
		setArray([]);
	}

	function reset() {
		setArray(initial_value);
	}

	function replaceElement(letter, replacement) {
		setArray((currentArray) => {
			return currentArray.map((item) => (item === letter ? replacement : item));
		});
	}

	function addValue() {
		setArray((currentArray) => {
			return [value, ...currentArray];
		});
	}

	function addToSpecificIndex(index, letter) {
		setArray((currentArray) => {
			return currentArray.toSpliced(index, 1, letter);
		});
	}
	return (
		<>
			<button onClick={removeFirstElement}>Remove first element</button>
			<br />
			<button onClick={() => removeSpecificLetter('B')}>Remove all B's</button>
			<br />
			<button onClick={() => addNewLetterToStart('B')}>
				add new letter to start
			</button>
			<br />
			<button onClick={() => addNewLetterToEnd('Z')}>
				add new letter to end
			</button>
			<br />

			<button onClick={clearArray}>clear the array</button>
			<br />
			<button onClick={reset}>Reset array to innitial value</button>
			<br />
			<button onClick={() => replaceElement('B', 'H')}>
				replace B's with H's
			</button>
			<br />
			<button onClick={() => addToSpecificIndex(1, 'M')}>
				Add M after 2nd letter
			</button>
			<br />
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={addValue}>add value to the start of array</button>
			<div>{array.join(', ')}</div>
		</>
	);
}

export default App;
