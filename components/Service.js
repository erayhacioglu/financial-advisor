import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { services } from '../data';

const Service = () => {
	return (
		<div className='service-section'>
			<div className='container'>
				<SectionHeading heading='Hizmetlerimiz' />
				<div className='service'>
					{services.map((item, key) => (
						<div className='service-box' key={key}>
							<div className='service-icon'>
								<img
									src={item.img}
									alt='hizmet-resim'
									className='service-img'
								/>
							</div>
							<h2 className='service-title'>{item.title}</h2>
							<p className='service-text'>{item.text}</p>
						</div>
					))}
				</div>
				<div className='service-link-box'>
					<Link href='/'>
						<a className='service-link'>Daha Fazla</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Service;
