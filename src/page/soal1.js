import { useState } from 'react';

export const Soal1 = () => {
	const [detik, setDetik] = useState(0);
	const [jam, setJam] = useState(0);
	const [menit, setMenit] = useState(0);
	const [sisaDetik, setSisaDetik] = useState(0);

	const [detik2, setDetik2] = useState(0);
	const [jam2, setJam2] = useState(0);
	const [menit2, setMenit2] = useState(0);
	const [jumlahDetik, setJumlahDetik] = useState(0);

	const handleDetik = e => {
		setDetik(e.target.value);
	};

	const handleKonversi = () => {
		setJam(Math.floor(detik / 3600));
		setMenit(Math.floor((detik % 3600) / 60));
		setSisaDetik(Math.floor((detik % 3600) % 60));
	};

	return (
		<>
			<div>
				<h3>Konversi Detik</h3>
				<input type='number' className='' onChange={handleDetik} />
				<button
					className='ml-3 btn btn-outline-primary'
					onClick={handleKonversi}>
					Konversi
				</button>
				<p className='m-0'>
					<u>Hasil</u>
				</p>
				<p className='m-0'>Jumlah Jam : {jam}</p>
				<p className='m-0'>Jumlah Menit : {menit}</p>
				<p className='m-0'>Jumlah Detik : {sisaDetik}</p>
			</div>

			<div>
				<h3 className='mt-5'>Konversi Jam Menit Detik</h3>
				<div className='mt-1'>
					Masukkan jumlah jam :{' '}
					<input
						type='number'
						className='ml-3'
						onChange={e => setJam2(e.target.value)}
					/>
				</div>
				<div className='mt-1'>
					Masukkan jumlah menit :{' '}
					<input
						type='number'
						className='ml-1'
						onChange={e => setMenit2(e.target.value)}
					/>
				</div>
				<div className='mt-1'>
					Masukkan jumlah detik :{' '}
					<input
						type='number'
						className='ml-2'
						onChange={e => setDetik2(e.target.value)}
					/>
				</div>
				<button
					className='my-2 btn btn-outline-primary'
					onClick={() =>
						setJumlahDetik(
							parseInt(jam2) * 3600 + parseInt(menit2) * 60 + parseInt(detik2)
						)
					}>
					Konversi
				</button>
				<p className='m-0'>
					<u>Hasil</u>
				</p>
				<p>Jumlah detik yang dimasukkan dari atas adalah : {jumlahDetik}</p>
			</div>
		</>
	);
};
