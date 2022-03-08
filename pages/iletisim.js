import React from 'react';
import PageHeader from '../components/PageHeader';
import { contactInfo, mapSrc } from '../data';

const Contact = () => {
	return (
		<>
			<PageHeader title='İletişim' />
			<div className='contact-section'>
				<div className='container'>
					<div className='contact-map'>
						<iframe
							src={mapSrc}
							width='100%'
							height='100%'
							loading='lazy'
							title='West Mali Müşavirlik'
						/>
					</div>
					<div className='contact'>
						<div className='contact-content'>
							<h2 className='contact-title'>İletişim Bilgilerimiz</h2>
							<div className='contact-info'>
								{contactInfo.map((item, key) => (
									<div className='contact-info-box' key={key}>
										<div className='contact-info-box-icon'>
											<i className={item.icon} />
										</div>
										<div className='contact-info-box-text'>{item.info}</div>
									</div>
								))}
							</div>
						</div>
						<div className='contact-form-box'>
							<h2 className='contact-form-title'>Bize Yazın</h2>
							<form className='contact-form'>
								<div className='contact-form-fields'>
									<span className='contact-form-text'>Ad Soyad</span>
									<input className='contact-form-input' />
								</div>
								<div className='contact-form-fields'>
									<span className='contact-form-text'>Email</span>
									<input className='contact-form-input' />
								</div>
								<div className='contact-form-fields'>
									<span className='contact-form-text'>Konu</span>
									<input className='contact-form-input' />
								</div>
								<div className='contact-form-fields'>
									<span className='contact-form-text'>Açıklama</span>
									<textarea className='contact-form-textarea'></textarea>
								</div>
								<div className='contact-form-fields'>
									<button className='contact-form-btn'>Gönder</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
