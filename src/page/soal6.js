import { useState } from 'react';

export const Soal6 = () => {
	const [row, setRow] = useState(0);
	const [result, setResult] = useState([]);

	const handleRow = e => {
		setRow(e.target.value);
	};

	const handleResult = () => {
		let result = [];
		for (let i = 0; i < row; i++) {
			let temp = [];
			for (let j = 0; j <= i; j++) {
				if (j === 0 || j === i) {
					temp.push(1);
				} else {
					temp.push(result[i - 1][j - 1] + result[i - 1][j]);
				}
			}
			result.push(temp);
		}
		setResult(result);
	};

	return (
		<>
			<div>
				<h3>Tringle Pascale</h3>
				Masukkan jumlah baris : <input type='number' onChange={handleRow} />
				<button className='ml-3 btn btn-outline-primary' onClick={handleResult}>
					Cek
				</button>
				<p className='m-0'>
					<u>Hasil</u>
				</p>
				{result.map((item, index) => {
					//make center text with bootstrap
					return (
						<div>
							<div key={index} className='text-center'>
								{item.map((item, index) => {
									return <span key={index}>{item} </span>;
								})}
								<br />
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
