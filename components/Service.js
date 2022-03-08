import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { services } from '../data';

const Service = () => {
	return (
		<div className='service-section'>
			<div className='container'>
				<SectionHeading heading='Neler Yapıyoruz?' />
				<div className='service'>
					{services.map((item, key) => (
						<Link href={`/hizmetlerimiz/${item.slug}`}>
							<a className='service-box' key={key}>
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
					<Link href='/'>
						<a className='service-link'>Daha Fazla</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Service;
