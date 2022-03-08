import React from 'react';
import Link from 'next/link';

const PageHeader = ({ title, path }) => {
	return (
		<div className='page-header-section'>
			<div className='container'>
				<div className='page-header'>
					<span className='page-header-title'>{title}</span>
					<div className='breadcrumbs'>
						<Link href='/'>
							<a>Anasayfa</a>
						</Link>
						&nbsp;/&nbsp;
						<span style={{ color: `${path ? '#16132f' : ''}` }}>{title}</span>
						&nbsp;
						{path && <span>/{path.split('/')[2]}</span>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageHeader;
