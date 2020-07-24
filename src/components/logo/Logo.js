import React from 'react';
import Tilt from 'react-tilt';
import brain from './brainlogo.png';
// import '.Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br3 shadow-2" options={{ max: 55}} style={{ height: 150, width: 150}} >
				<div className="Tilt-inner pa3">
					<img style={{paddingTop: '2px'}} alt='logo' src={brain}/>
				</div>
			</Tilt>
		</div>
	);
}


export default Logo;