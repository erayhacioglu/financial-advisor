import SectionHeading from './SectionHeading';
import { services } from '../data';

const Service = () => {
	return (
		<div className='service-section'>
			<div className='container'>
				<SectionHeading heading='Hizmetlerimiz' />
				<div className='service'>
					{services.map((item, key) => (
						<div className='service-card' key={key}>
							<div className='service-icon'>
								<img src={item.img} alt='' className='service-img' />
							</div>
							<h2 className='service-title'>{item.title}</h2>
							<p className='service-text'>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Service;
