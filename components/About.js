import Link from 'next/link';

const About = () => {
	return (
		<div className='about-section'>
			<div className='container'>
				<div className='about'>
					<div className='about-photo'>
						<img src='./about.jpg' alt='' className='about-img' />
					</div>
					<div className='about-content'>
						<h1 className='about-content-title'>Neden West Mali Müşavirlik?</h1>
						<p className='about-content-important-text'>
							Mesleki hassasiyet ve gösterdiğimiz özen sayesinde West Mali
							Müşavirlik İstanbul'un saygın mali müşavirlik bürolarından birisi
							haline gelmiştir.
						</p>
						<p className='about-content-text'>
							West Mali Müşavirlik; mali müşavirlik, muhasebe ve danışmanlık
							alanında Levent, İstanbul'daki bürosundan İstanbul ve çevresindeki
							mükelleflerimize hizmet vermektedir.
						</p>
						<Link href='/hakkimizda'>
							<a className='about-content-link'>Devamı</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
