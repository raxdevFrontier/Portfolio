import React from 'react';

export const Hero: React.FC = () => {
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
					className="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					<h1 className="text-5xl font-bold">Box Office News!</h1>
					<p className="py-6">
						Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
						pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean
						sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa
						nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti
						sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
