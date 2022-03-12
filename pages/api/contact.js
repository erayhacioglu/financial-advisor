import nodemailer from 'nodemailer';

export default async (req, res) => {
	const { fullName, email, phone, description } = req.body;

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.user,
			pass: process.env.pass,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	try {
		const emailResponse = await transporter.sendMail({
			from: email,
			to: 'hacoglueray@gmail.com',
			subject: `West Mali Müşavirlik İletişim`,
			html: `
      <p><strong>Ad Soyad : </strong>${fullName}</p><br/>
      <p><strong>Telefon : </strong>${phone}</p><br/>
      <p><strong>Açıklama : </strong>${description}</p>
      `,
		});
		res.status(200).json({ msg: 'Form Gönderildi' });
	} catch (err) {
		console.log(err);
	}
};
