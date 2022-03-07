import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { questions } from '../data';

const Faqs = () => {
	const [activeQuestion, setActiveQuestion] = useState(1);

	return (
		<div className='question-section'>
			<div className='container'>
				<SectionHeading heading='En Çok Sorulanlar' />
				<div className='question'>
					<div className='question-picture'>
						<img
							src='./question.svg'
							alt='question-image'
							className='question-img'
						/>
					</div>
					<div className='question-content'>
						{questions.map((item, key) => (
							<div className='question-box' key={key}>
								<div
									className={`question-header ${
										item.id === activeQuestion ? 'active' : ''
									}`}
									onClick={() => setActiveQuestion(item.id)}
								>
									<span className='question-header-text'>{item.question}</span>
									<i
										className={`fas ${
											item.id === activeQuestion
												? 'fa-chevron-up'
												: 'fa-chevron-down'
										}`}
									/>
								</div>
								<div
									className={`question-body ${
										item.id === activeQuestion ? 'active' : ''
									}`}
								>
									{item.answer}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faqs;