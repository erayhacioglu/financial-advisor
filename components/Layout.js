import Header from './Header';
import Footer from './Footer';
import WhatsApp from './WhatsApp';

const Layout = ({ children }) => {
	return (
		<div className='wrapper'>
			<Header />
			{children}
			<WhatsApp />
			<Footer />
		</div>
	);
};

export default Layout;
