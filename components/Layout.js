import { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import ScrollTo from './ScrollTo';
import WhatsApp from './WhatsApp';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<>
			<Header />
			{children}
			<ScrollTo />
			<WhatsApp />
			<Footer />
		</>
	);
};

export default Layout;
