import React from 'react';

const SectionHeading = ({ heading }) => {
	return (
		<>
			<h2
				className='section-heading'
				data-aos='zoom-in'
				data-aos-duration='1000'
			>
				{heading}
			</h2>
		</>
	);
};

export default SectionHeading;
