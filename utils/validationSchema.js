import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	fullName: Yup.string().required('ad soyad boş bırakılamaz'),
	email: Yup.string().email('geçersiz email').required('email boş bırakılamaz'),
	topic: Yup.string().required('konu boş bırakılamaz'),
	description: Yup.string()
		.required('açıklama boş bırakılamaz')
		.max(100, 'en fazla 100 karakter yazılabilir'),
});

export default validationSchema;
