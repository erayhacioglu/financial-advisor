import { useState, useEffect } from 'react';

const ScrollTo = () => {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		const changeScroll = () => {
			if (window.scrollY >= 300) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};
		changeScroll();
		window.addEventListener('scroll', changeScroll);
	}, []);

	return (
		<button
			className={`scrollto-btn ${scroll ? 'active' : ''}`}
			onClick={() => window.scrollTo({ top: 0 })}
		>
			<i className='fa-solid fa-arrow-up' />
		</button>
	);
};

export default ScrollTo;
