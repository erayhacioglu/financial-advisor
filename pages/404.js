import Image from 'next/image';
import PageNotFound from '../public/page-not-found.svg';

const NotFound = () => {
	return (
		<div className='page-not-found'>
			<img
				src='page-not-found.svg'
				alt='sayfa bulunamadı'
				className='page-not-found-img'
			/>
			<h1 className='page-not-found-text'>Sayfa Bulunamadı</h1>
		</div>
	);
};

export default NotFound;
