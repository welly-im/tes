import { useState } from 'react';

export const Soal5 = () => {
	const [sentence, setSentence] = useState('');
	const [result, setResult] = useState([]);
	const [totalAlphabetCount, setTotalAlphabetCount] = useState(0);

	const handleSentence = e => {
		setSentence(e.target.value);
	};

	const handleResult = () => {
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';
		const alphabetArray = alphabet.split('');
		const sentenceArray = sentence.split('');
		const resultArray = [];
		let alphabetUsed = 0;
		for (let i = 0; i < alphabetArray.length; i++) {
			let alphabetCount = 0;
			for (let j = 0; j < sentenceArray.length; j++) {
				if (alphabetArray[i] === sentenceArray[j]) {
					alphabetCount++;
				}
			}
			if (alphabetCount !== 0) {
				alphabetUsed++;
				resultArray.push([alphabetArray[i], alphabetCount]);
			}
		}
		setResult(resultArray);

		const alphabetCount = [];
		let totalAlphabet = 0;
		for (let i = 0; i < alphabet.length; i++) {
			let count = 0;
			for (let j = 0; j < sentence.length; j++) {
				if (alphabet[i] === sentence[j]) {
					count++;
				}
			}
			alphabetCount.push(count);
			totalAlphabet += count;
		}
		setTotalAlphabetCount(totalAlphabet);
	};

	return (
		<>
			<div>
				<h3>Alphabet</h3>
				Masukkan kalimat : <input type='text' onChange={handleSentence} />
				<button className='ml-3 btn btn-outline-primary' onClick={handleResult}>
					Cek
				</button>
				<p className='m-0'>
					<u>Hasil</u>
				</p>
				<table>
					<tbody>
						{result.map((item, index) => (
							<tr key={index}>
								<td>{item[0]}</td>
								<td>{item[1]}</td>
							</tr>
						))}
					</tbody>
				</table>
				<p>Jumlah total huruf : {totalAlphabetCount}</p>
			</div>
		</>
	);
};
