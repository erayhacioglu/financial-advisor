import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { services } from '../utils/data';

const Service = () => {
	return (
		<div className='service-section'>
			<div className='container'>
				<SectionHeading heading='Neler Yapıyoruz?' />
				<div className='service'>
					{services.map((item, key) => (
						<Link href={`/hizmetlerimiz/${item.slug}`} key={key}>
							<a className='service-box'>
								<div className='service-icon'>
									<img
										src={item.img}
										alt='hizmet-resim'
										className='service-img'
									/>
								</div>
								<h2 className='service-title'>{item.title}</h2>
								<p className='service-text'>{item.text}</p>
							</a>
						</Link>
					))}
				</div>
				<div className='service-link-box'>
					<Link href='/hizmetlerimiz/mali-musavirlik'>
						<a className='service-link'>Daha Fazla</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Service;
