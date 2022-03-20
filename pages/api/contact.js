import sgMail from '@sendgrid/mail';

export default async (req, res) => {
	if (req.method === 'POST') {
		const { fullName, email, phone, description } = req.body;
		sgMail.setApiKey(process.env.SENDGRID_API_KEY);
		const msg = {
			to: 'erayhacioglufreelancer@gmail.com', // Change to your recipient
			from: 'erayhacioglufreelancer@gmail.com', // Change to your verified sender
			subject: 'West Mali Müşavirlik İletişim',

			html: `
            <p><strong>Ad Soyad : </strong>${fullName}</p><br/>
            <p><strong>E-Mail : </strong>${email}</p><br/>
            <p><strong>Telefon : </strong>${phone}</p><br/>
            <p><strong>Açıklama : </strong>${description}</p>
            `,
		};
		sgMail
			.send(msg)
			.then(() => {
				console.log('Email sent',{req.body});
			})
			.catch((error) => {
				console.error(error);
			});

		res.status(200).json({ msg: 'ok',req.body });
	} else if (req.method !== 'POST') {
		res.status(400).json({ msg: 'error' });
	}
};
