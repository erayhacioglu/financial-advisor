import { brandLogos } from '../data';
import Marquee from 'react-fast-marquee';

const BrandLogos = () => {
	return (
		<div className='brand-logo'>
			<div className='container'>
				<div className='marquee-brand'>
					<Marquee direction='left' speed='50'>
						{brandLogos.map((item, key) => (
							<img
								src={item.img}
								alt='marka-logo'
								key={key}
								className='marquee-img'
							/>
						))}
					</Marquee>
				</div>
			</div>
		</div>
	);
};

export default BrandLogos;
