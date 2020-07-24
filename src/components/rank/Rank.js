import React from 'react';

const Rank = ({name, entries}) => {
	return (
		<div>
			<div className='white f3'>
				{`${name}, you searched faces in `}
			</div>
			<div className='white f1'>
				{entries}
			</div>
			<div className='white f3'>
				{'images'}
			</div>
		</div>
	);
}

export default Rank;