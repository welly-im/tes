import { useState } from 'react';

export const Soal3 = () => {
	const [years, setYears] = useState(0);
	const [result, setResult] = useState('');

	const handleYears = e => {
		setYears(e.target.value);
	};

	const handleResult = () => {
		if (years % 4 === 0) {
			setResult(years + ' Merupakan tahun kabisat');
		} else {
			setResult(years + ' Bukan tahun kabisat');
		}
	};

	return (
		<>
			<div>
				<h3>Tahun Kabisat</h3>
				Masukkan tahun : <input type='number' onChange={handleYears} />
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
