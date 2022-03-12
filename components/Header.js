import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
	const [dropdown, setDropdown] = useState(false);
	const [navbar, setNavbar] = useState(false);

	return (
		<header className='header'>
			<div className='header-top'>
				<div className='container'>
					<div className='header-social'>
						<div className='header-left'>
							<i className='fas fa-phone' />
							<span>(507)-274-97-09</span>
						</div>
						<div className='header-right'>
							<i className='fas fa-envelope' />
							<span>ugurmenekse@gmail.com</span>
						</div>
					</div>
				</div>
			</div>
			<div className='header-bottom'>
				<div className='container'>
					<nav className='navbar'>
						<div className='logo'>
							<img
								src='https://marka-logo.com/wp-content/uploads/2020/09/Google-Logo.png'
								alt='logo'
								className='logo-img'
							/>
						</div>
						<div className='navbar-btn-box'>
							<button className='navbar-btn' onClick={() => setNavbar(!navbar)}>
								{navbar ? (
									<i className='fas fa-times' />
								) : (
									<i className='fas fa-bars' />
								)}
							</button>
						</div>
						<div className={`menu ${navbar ? 'active' : ''}`}>
							<Link href='/'>
								<a className='menu-link' onClick={() => setNavbar(false)}>
									Anasayfa
								</a>
							</Link>
							<Link href='/hakkimizda'>
								<a className='menu-link' onClick={() => setNavbar(false)}>
									Hakkımızda
								</a>
							</Link>

							<a className='menu-link' onClick={() => setDropdown(!dropdown)}>
								Hizmetlerimiz{' '}
								{dropdown ? (
									<i className='fas fa-angle-up' />
								) : (
									<i className='fas fa-angle-down' />
								)}
								<div className={`dropdown-menu ${dropdown ? 'active' : ''}`}>
									<Link href='/hizmetlerimiz/mali-musavirlik'>
										<a
											className='dropdown-menu-link'
											onClick={() => setNavbar(false)}
										>
											Mali Müşavirlik
										</a>
									</Link>
									<Link href='/hizmetlerimiz/sirket-kurma'>
										<a
											className='dropdown-menu-link'
											onClick={() => setNavbar(false)}
										>
											Şirket Kurma
										</a>
									</Link>
									<Link href='/hizmetlerimiz/danismanlik'>
										<a
											className='dropdown-menu-link'
											onClick={() => setNavbar(false)}
										>
											Danışmanlık
										</a>
									</Link>
									<Link href='/hizmetlerimiz/muhasebe'>
										<a
											className='dropdown-menu-link'
											onClick={() => setNavbar(false)}
										>
											Muhasebe
										</a>
									</Link>
								</div>
							</a>

							<Link href='/iletisim'>
								<a className='menu-link' onClick={() => setNavbar(false)}>
									İletişim
								</a>
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
