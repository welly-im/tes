import logo from './logo.svg';
import './App.css';
import { Soal1 } from './page/soal1';
import { Soal2 } from './page/soal2';
import { Soal3 } from './page/soal3';
import { Soal4 } from './page/soal4';
import { Soal5 } from './page/soal5';
import { Soal6 } from './page/soal6';
import { Soal7 } from './page/soal7';
import { Tabs, Tab } from 'react-bootstrap';

function App() {
	return (
		<>
			<div className='container card p-3 mt-3'>
				<div className='card-body shadow bg-white rounded'>
					<div className='d-flex justify-content-between'>
						<h4>Soal Tes Logic IT SinarMas</h4>
					</div>
					<Tabs
						defaultActiveKey='soal1'
						transition={true}
						id='noanim-tab-example'
						className='mb-3'>
						<Tab eventKey='soal1' title='Soal 1'>
							<Soal1 />
						</Tab>
						<Tab eventKey='soal2' title='Soal 2'>
							<Soal2 />
						</Tab>
						<Tab eventKey='soal3' title='Soal 3'>
							<Soal3 />
						</Tab>
						<Tab eventKey='soal4' title='Soal 4'>
							<Soal4 />
						</Tab>
						<Tab eventKey='soal5' title='Soal 5'>
							<Soal5 />
						</Tab>
						<Tab eventKey='soal6' title='Soal 6'>
							<Soal6 />
						</Tab>
						<Tab eventKey='soal7' title='Soal 7'>
							<Soal7 />
						</Tab>
					</Tabs>
				</div>
			</div>
		</>
	);
}

export default App;
