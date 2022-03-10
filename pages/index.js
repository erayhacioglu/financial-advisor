import Head from 'next/head';
import Introduction from '../components/Introduction';
import BrandLogos from '../components/BrandLogos';
import About from '../components/About';
import Service from '../components/Service';
import Faqs from '../components/Faqs';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const Home = () => {
	return (
		<>
			<Head>
				<title>West Mali Müşavirlik</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Introduction />
			<BrandLogos />
			<About />
			<Service />
			<Faqs />
			<Testimonials />
			<CallToAction />
		</>
	);
};

export default Home;
