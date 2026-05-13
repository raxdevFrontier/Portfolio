import React from 'react';

export const Hero: React.FC = () => {
	return (
		<section className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse gap-20">
				<img
					src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
					className="max-w-lg rounded-lg shadow-2xl"
				/>
				<div>
					<h1 className="text-4xl font-bold sm:text-5xl">
						Hola, soy <span className="text-primary underline">RaxDev</span>
					</h1>
					<p className="text-justify py-6">
						Mi nombre es Oscar y soy un Desarrollador Frontend especializado en React,
						TypeScript.
						<br />
						Me enfoco en construir experiencias web rápidas, limpias y centradas en el
						usuario.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
