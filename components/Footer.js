import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='footer-section'>
			<div className='container'>
				<div className='footer'>
					<div className='footer-body'>
						<div className='footer-body-left'>
							<div className='footer-logo'>
								<img
									src='https://marka-logo.com/wp-content/uploads/2020/09/Google-Logo.png'
									alt='west mali müşavirlik logo'
									className='footer-img'
								/>
							</div>
							<div className='footer-description'>
								<p className='footer-text'>
									West Mali Müşavirlik; mali müşavirlik, muhasebe ve danışmanlık
									alanında Levent, İstanbul'daki bürosundan hizmet vermektedir
								</p>
							</div>
							<div className='footer-social'>
								<a href='/' target='_blank' className='social-link'>
									<i className='fa-brands fa-instagram' />
								</a>
								<a href='/' target='_blank' className='social-link'>
									<i className='fa-brands fa-linkedin' />
								</a>
								<a href='/' target='_blank' className='social-link'>
									<i className='fa-brands fa-facebook' />
								</a>
								<a href='/' target='_blank' className='social-link'>
									<i className='fa-brands fa-twitter' />
								</a>
							</div>
						</div>
						<div className='footer-body-right'>
							<div className='footer-link-container'>
								<h3 className='footer-title'>Hizmetlerimiz</h3>
								<div className='footer-links'>
									<Link href='/hizmetlerimiz/mali-musavirlik'>
										<a className='footer-link'>Mali Müşavirlik</a>
									</Link>
									<Link href='/hizmetlerimiz/sirket-kurma'>
										<a className='footer-link'>Şirket Kurma</a>
									</Link>
									<Link href='/hizmetlerimiz/muhasebe'>
										<a className='footer-link'>Muhasebe</a>
									</Link>
									<Link href='/hizmetlerimiz/danismanlik'>
										<a className='footer-link'>Danışmanlık</a>
									</Link>
								</div>
							</div>
							<div className='footer-link-container'>
								<h3 className='footer-title'>Kurumsal</h3>
								<div className='footer-links'>
									<Link href='/#en-cok-sorulanlar'>
										<a className='footer-link'>Sık Sorulanlar</a>
									</Link>
									<Link href='/hakkimizda'>
										<a className='footer-link'>Hakkımızda</a>
									</Link>
									<Link href='/iletisim'>
										<a className='footer-link'>İletişim</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='footer-bottom'>
						<p className='copyright-text'>© 2022 West Mali Müşavirlik</p>
						<a
							href='https://www.linkedin.com/in/eray/hacıoğlu-1a3367199'
							target='_blank'
							className='designed-link'
						>
							designed by @erayhacioglu
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
