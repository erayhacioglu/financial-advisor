import React, { useState } from 'react';
import Head from 'next/head';
import PageHeader from '../components/PageHeader';
import { contactInfo, mapSrc } from '../utils/data';
import { useFormik } from 'formik';
import validationSchema from '../utils/validationSchema';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import axios from 'axios';

const Contact = () => {
	const [loading, setLoading] = useState(false);

	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		touched,
		resetForm,
	} = useFormik({
		initialValues: {
			fullName: '',
			email: '',
			phone: '',
			description: '',
		},
		onSubmit: (values) => {
			handleContact(values);
			resetForm();
		},
		validationSchema,
	});

	const handleContact = async (values) => {
		let config = {
			method: 'post',
			url: `/api/contact`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: values,
		};
		try {
			setLoading(true);
			const response = await axios(config);
			console.log(response);
			if (response.status === 200)
				toast.success('Mesajınzı Aldık Teşekkürler!!!');
			setLoading(false);
		} catch (err) {}
	};

	return (
		<>
			<Head>
				<title>İletişim</title>
			</Head>
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
						<div className='contact-content' data-aos='fade-right'>
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
						<div className='contact-form-box' data-aos='fade-left'>
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
									<span className='contact-form-text'>Telefon</span>
									<InputMask
										mask='(999)-999-99-99'
										name='phone'
										value={values.phone}
										onChange={handleChange}
										onBlur={handleBlur}
									>
										{(inputProps) => (
											<input
												type='tel'
												className={`contact-form-input ${
													errors.phone && touched.phone && 'error'
												}`}
												{...inputProps}
											/>
										)}
									</InputMask>
								</div>
								{errors.phone && touched.phone && (
									<span className='error-message'>{errors.phone}</span>
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
									<button
										className={`contact-form-btn ${loading ? 'disable' : ''}`}
										disabled={loading ? true : false}
									>
										{loading ? <div className='spinner'></div> : 'Gönder'}
									</button>
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
