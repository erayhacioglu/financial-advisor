import Head from 'next/head';
import PageHeader from '../components/PageHeader';

const About = () => {
	return (
		<>
			<Head>
				<title>Hakkımızda</title>
			</Head>
			<PageHeader title='Hakkımızda' />
			<div className='about-page-section'>
				<div className='container'>
					<div className='about-page'>
						<div className='about-page-picture'>
							<img
								src='./about.jpg'
								alt='hakkimizda img'
								className='about-page-img'
							/>
						</div>
						<div className='about-page-content'>
							<h2 className='about-page-title'>Biz Kimiz?</h2>
							<p className='about-page-text'>
								<span className='about-page-important'>
									Mesleki hassasiyet ve gösterdiğimiz özen sayesinde West Mali
									Müşavirlik İstanbul'un saygın mali müşavirlik bürolarından
									birisi haline gelmiştir.
								</span>
								West Mali Müşavirlik; mali müşavirlik, muhasebe ve danışmanlık
								alanında Levent, İstanbul'daki bürosundan İstanbul ve
								çevresindeki mükelleflerimize hizmet vermektedir. West Mali
								Müşavirlik; mali müşavirlik, muhasebe ve danışmanlık alanında
								Levent, İstanbul'daki bürosundan İstanbul ve çevresindeki
								mükelleflerimize hizmet vermektedir. West Mali Müşavirlik; mali
								müşavirlik, muhasebe ve danışmanlık alanında Levent,
								İstanbul'daki bürosundan İstanbul ve çevresindeki
								mükelleflerimize hizmet vermektedir. West Mali Müşavirlik; mali
								müşavirlik, muhasebe ve danışmanlık alanında Levent,
								İstanbul'daki bürosundan İstanbul ve çevresindeki
								mükelleflerimize hizmet vermektedir. West Mali Müşavirlik; mali
								müşavirlik, muhasebe ve danışmanlık alanında Levent,
								İstanbul'daki bürosundan İstanbul ve çevresindeki
								mükelleflerimize hizmet vermektedir. West Mali Müşavirlik; mali
								müşavirlik, muhasebe ve danışmanlık alanında Levent,
								İstanbul'daki bürosundan İstanbul ve çevresindeki
								mükelleflerimize hizmet vermektedir.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
