import SectionHeading from './SectionHeading';
import Carousel from 'react-elastic-carousel';
import { testimonials } from '../utils/data';

const Testimonials = () => {
	const breakPoints = [
		{ width: 500, itemsToShow: 1 },
		{ width: 768, itemsToShow: 2 },
		{ width: 992, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	];

	return (
		<div className='testimonial-section'>
			<div className='container'>
				<SectionHeading heading='Mutlu Müşterilerimiz' />
				<Carousel breakPoints={breakPoints}>
					{testimonials.map((item, key) => (
						<div className='testimonial-card' key={key}>
							<div className='testimonial-icon'>
								<i className='fas fa-quote-left' />
							</div>
							<p className='testimonial-text'>{item?.message}</p>
							<div className='testimonial-user'>
								<img
									src={item?.img}
									alt={item?.name}
									className='testimonial-img'
								/>
								<div className='testimonial-content'>
									<span className='testimonail-name'>{item?.name}</span>
									<span className='testimonail-job'>{item?.job}</span>
								</div>
							</div>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Testimonials;
