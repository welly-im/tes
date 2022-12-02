import { useState } from 'react';

export const Soal2 = () => {
	const [faktorial, setFaktorial] = useState(0);
	const [decimal, setDecimal] = useState(0);

	const handleFaktorial = e => {
		setFaktorial(e.target.value);
	};

	const handleDecimal = () => {
		setDecimal(faktorialRekursif(faktorial));
	};

	const faktorialRekursif = n => {
		if (n === 0) {
			return 1;
		} else {
			return n * faktorialRekursif(n - 1);
		}
	};

	return (
		<>
			<div>
				<h3>Decimal</h3>
				Masukkan nilai faktorial :{' '}
				<input type='number' onChange={handleFaktorial} />
				<button
					className='ml-3 btn btn-outline-primary'
					onClick={handleDecimal}>
					Konversi
				</button>
				<p className='m-0'>
					<u>Hasil</u>
				</p>
				<p>Nilai decimalnya adalah : {decimal}</p>
			</div>
		</>
	);
};
