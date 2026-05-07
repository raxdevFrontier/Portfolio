import React from 'react';

interface CardProps {
	title: string;
	description?: string;
	tag?: string;
	image?: {
		src: string;
		alt: string;
	};
	badges?: string[];
}

const Card: React.FC<CardProps> = ({ title, description, tag, image, badges }) => {
	const badgeList = badges?.map((badge, index) => (
		<div key={badge + index} className="badge badge-outline">
			{badge}
		</div>
	));

	return (
		<div className="card bg-base-100 w-full shadow-md">
			<figure>
				<img
					src={
						image?.src
							? image.src
							: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
					}
					alt={image?.alt ? image.alt : 'Shoes'}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title ? title : 'Card Title'}
					{/* Card Title */}
					{tag && <div className="badge badge-secondary">{tag}</div>}
				</h2>
				{description && <p>{description}</p>}
				<div className="card-actions justify-end">{badgeList}</div>
			</div>
		</div>
	);
};

export default Card;
