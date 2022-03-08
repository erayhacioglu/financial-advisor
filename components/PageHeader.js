import React from 'react';
import Link from 'next/link';

const PageHeader = ({ title }) => {
	return (
		<div className='page-header-section'>
			<div className='container'>
				<div className='page-header'>
					<span className='page-header-title'>{title}</span>
					<div className='breadcrumbs'>
						<Link href='/'>
							<a>Anasayfa</a>
						</Link>
						&nbsp;/&nbsp;<span>{title}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
