import { useState } from 'react';

export const Soal4 = () => {
	const [word, setWord] = useState('');
	const [result, setResult] = useState('');

	const handleWord = e => {
		setWord(e.target.value);
	};

	const handleResult = () => {
		const wordReverse = word.split('').reverse().join('');
		if (word === wordReverse) {
			setResult(word + ' Merupakan kata palindrome');
		} else {
			setResult(word + ' Bukan kata palindrome');
		}
	};

	return (
		<>
			<div>
				<h3>Palindrome</h3>
				Masukkan kata : <input type='text' onChange={handleWord} />
				<button className='ml-3 btn btn-outline-primary' onClick={handleResult}>
					Cek
				</button>
				<p className='m-0'>
					<u>Hasil</u>
				</p>
				<p>{result}</p>
			</div>
		</>
	);
};
