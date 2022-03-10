import React from 'react';
import PageHeader from '../components/PageHeader';
import { contactInfo, mapSrc } from '../utils/data';
import { useFormik } from 'formik';
import validationSchema from '../utils/validationSchema';

const Contact = () => {
	const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
		useFormik({
			initialValues: {
				fullName: '',
				email: '',
				topic: '',
				description: '',
			},
			onSubmit: (values) => {
				console.log(values);
			},
			validationSchema,
		});

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
							<form className='contact-form' onSubmit={handleSubmit}>
								<div className='contact-form-fields'>
									<span className='contact-form-text'>Ad Soyad</span>
									<input
										className={`contact-form-input ${
											errors.fullName && touched.fullName && 'error'
										}`}
										name='fullName'
										value={values.fullName}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{errors.fullName && touched.fullName && (
									<span className='error-message'>{errors.fullName}</span>
								)}
								<div className='contact-form-fields'>
									<span className='contact-form-text'>Email</span>
									<input
										className={`contact-form-input ${
											errors.email && touched.email && 'error'
										}`}
										name='email'
										value={values.email}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{errors.email && touched.email && (
									<span className='error-message'>{errors.email}</span>
								)}
								<div className='contact-form-fields'>
									<span className='contact-form-text'>Konu</span>
									<input
										className={`contact-form-input ${
											errors.topic && touched.topic && 'error'
										}`}
										name='topic'
										value={values.topic}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								{errors.topic && touched.topic && (
									<span className='error-message'>{errors.topic}</span>
								)}
								<div className='contact-form-fields'>
									<span className='contact-form-text'>Açıklama</span>
									<textarea
										className={`contact-form-textarea ${
											errors.description && touched.description && 'error'
										}`}
										maxLength='100'
										name='description'
										value={values.description}
										onChange={handleChange}
										onBlur={handleBlur}
									></textarea>
								</div>
								{errors.description && touched.description && (
									<span className='error-message'>{errors.description}</span>
								)}
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
