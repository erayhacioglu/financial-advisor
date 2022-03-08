import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
	return (
		<>
			<a id='iletisim'></a>
			<div className='action-section'>
				<div className='container'>
					<div className='action'>
						<div className='action-picture'>
							<img src='./contact.svg' alt='' className='action-img' />
						</div>
						<div className='action-content'>
							<h2 className='action-title'>Nasıl Yardımcı Olabiliriz?</h2>
							<p className='action-text'>
								Bizimle iletişime geçerek, fiyat alabilir aklınıza takılan
								soruları sorabilirsiniz.
							</p>
							<Link href='/iletisim'>
								<a className='action-link'>Bize Ulaşın</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CallToAction;
