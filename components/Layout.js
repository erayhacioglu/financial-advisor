import Header from './Header';
import Footer from './Footer';
import ScrollTo from './ScrollTo';
import WhatsApp from './WhatsApp';

const Layout = ({ children }) => {
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
