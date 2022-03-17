import React from 'react';
import Link from 'next/link';

const PageHeader = ({ title, service }) => {
	return (
		<div className='page-header-section'>
			<div className='container'>
				<div className='page-header'>
					<span className='page-header-title' data-aos='fade-up'>
						{title}
					</span>
					<div className='breadcrumbs' data-aos='fade-up'>
						<Link href='/'>
							<a>Anasayfa</a>
						</Link>
						&nbsp;/&nbsp;
						{service ? (
							<>
								Hizmetlerimiz&nbsp;/&nbsp;<span>{title}</span>
							</>
						) : (
							<span>{title}</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
