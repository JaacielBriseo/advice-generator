import { useState } from 'react';
import axios from 'axios';

import dice from './images/icon-dice.svg';
import mobiledivider from './images/pattern-divider-mobile.svg';

export const App = () => {
	const [advice, setAdvice] = useState('');

	const onClick = () => {
		axios.get('https://api.adviceslip.com/advice').then(({ data }) => setAdvice(data.slip));
	};

	return (
		<div className='bg-back h-screen flex justify-center items-center font-manrope'>
			<div className='bg-card h-72 w-11/12 rounded-2xl lg:w-2/4 lg:h-2/4'>
				<div className='text-center mt-3 lg:mt-14'>
					<small className='text-neon text-xs tracking-widest lg:text-lg'>ADVICE #{advice.id}</small>

					<div className='h-44 flex flex-col justify-center p-5'>
						<p className='text-[20px] text-take lg:text-[28px]'>
							"{advice === '' ? 'Click the button for an advice' : advice.advice}"
						</p>
					</div>
					<img src={mobiledivider} alt='divider' className='mx-auto mb-4 p-3 w-full' />
					<div className='-mt-2 lg:mt-8'>
						<button onClick={onClick} id='shadow' className='bg-neon rounded-full w-12 h-12 lg:w-16 lg:h-16'>
							<img src={dice} alt='Dice Icon' className='mx-auto w-5 lg:w-7' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
