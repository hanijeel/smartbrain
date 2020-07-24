import React from 'react';
import './imagelinkform.css';

const Imagelinkform = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
			<p className='f3'>
				{'Detect faces in your picture. Give it a try!'}
			</p>
			<div className='center'>
				<div className='pa4 br3 shadow-5 form center'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button 
						className='w-30 grow f4 link ph3 pv2 dib white bg-mid-gray'
						onClick={onButtonSubmit}
					>detect</button>
				</div>
			</div>
		</div>
	);
}

export default Imagelinkform;