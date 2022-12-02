import { useState } from 'react';

export const Soal7 = () => {
	//remove punctuation and spacing in sentence input then show sentence without punctuation and spacing
	const [sentence, setSentence] = useState('');
	const [result, setResult] = useState('');

	const handleSentence = e => {
		setSentence(e.target.value);
	};

	const handleResult = () => {
		const sentenceWithoutPunctuation = sentence.replace(/[^\w\s]/gi, '');
		const sentenceWithoutSpace = sentenceWithoutPunctuation.replace(/\s/g, '');
		setResult(sentenceWithoutSpace);
	};

	return (
		<>
			<div>
				<h3>Hapus tanda baca</h3>
				Masukkan kalimat : <input type='text' onChange={handleSentence} />
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
