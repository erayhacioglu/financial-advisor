import Link from 'next/link';
import Typewriter from 'typewriter-effect';

const Introduction = () => {
	return (
		<div className='introduction-wrapper'>
			<div className='container'>
				<div className='introduction'>
					<div className='introduction-content' data-aos='fade-right'>
						<h2 className='introduction-text'>West Mali Müşavirlik</h2>
						<h2 className='introduction-typewriter'>
							<Typewriter
								options={{
									strings: [
										'Şirket Kurma',
										'Muhasebe',
										'Mali Müşavirlik',
										'Danışmanlık',
									],
									autoStart: true,
									loop: true,
								}}
							/>
						</h2>

						<h2 className='introduction-text'>hizmetleri vermektedir.</h2>
						<Link href='#iletisim'>
							<a className='introduction-link'>Bize Ulaşın</a>
						</Link>
					</div>
					<div className='introduction-picture' data-aos='fade-left'>
						<img src='./introduction.svg' alt='' className='introduction-img' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
