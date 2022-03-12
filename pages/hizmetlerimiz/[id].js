import Head from 'next/head';
import PageHeader from '../../components/PageHeader';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { servicePage } from '../../utils/data';

const Service = () => {
	const router = useRouter();
	const { query, asPath } = router;

	const findService = servicePage.find((item) => item.slug === query.id);

	return (
		<>
			<Head>
				<title>{`${
					findService
						? 'Hizmetlerimiz | ' + findService?.title
						: 'Hizmetlerimiz'
				}`}</title>
			</Head>
			<PageHeader title={findService?.title} service />
			<div className='service-page-section'>
				<div className='container'>
					<div className='service-page'>
						<div className='service-page-menu'>
							{servicePage.map((item, key) => (
								<Link href={`/hizmetlerimiz/${item.slug}`} key={key}>
									<a
										className={`service-page-menu-link ${
											item.slug === query.id ? 'active' : ''
										}`}
									>
										{item.title}
									</a>
								</Link>
							))}
						</div>
						<div className='service-page-content'>
							<div className='service-page-picture'>
								<img
									src={`../../${findService?.img}`}
									alt={query?.id}
									className='service-page-img'
									loading='lazy'
								/>
							</div>
							<h2 className='service-page-title'>{findService?.title}</h2>
							<p className='service-page-text'>{findService?.text}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Service;
