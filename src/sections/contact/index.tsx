import React, { useContext } from 'react';
// import { useState } from 'react';
import SectionWrapper from '@/components/sectionWrapper';
import { SiGithub, SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { I18nContext } from '@/context/i18n/i18n.context';

const Contact: React.FC = () => {
	// const [isSent, setIsSent] = useState(false);
	// const [formData, setFormData] = useState({
	// 	name: '',
	// 	email: '',
	// 	message: '',
	// });

	const { t } = useContext(I18nContext);

	// const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
	// 	setFormData({
	// 		...formData,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	// const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
	// 	e.preventDefault();

	// 	// Simulación de envío
	// 	setTimeout(() => {
	// 		setIsSent(true);
	// 	}, 500);

	// 	// Limpiar formulario
	// 	setFormData({
	// 		name: '',
	// 		email: '',
	// 		message: '',
	// 	});

	// 	setTimeout(() => {
	// 		setIsSent(false);
	// 	}, 3000);
	// };

	return (
		<SectionWrapper id="contact" showDivider>
			<h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.contact.title}</h2>
			<p className="mt-3 mb-10 text-base opacity-70">
				{t.contact.description1}
				<br />
				{t.contact.description2}
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* TODO: WIP */}
				{/* Formulario */}
				{/* <div className="card bg-base-200 shadow-xl">
					<div className="card-body">
						<h3 className="card-title text-2xl mb-4">Envíame un mensaje</h3>

						{isSent && (
							<div className="alert alert-success mb-6">
								<span>Mensaje enviado correctamente.</span>
							</div>
						)}

						<form onSubmit={handleSubmit} className="space-y-5">
							<div className="form-control">
								<label className="label" htmlFor="contact_name">
									<span className="label-text text-base-content font-semibold mb-2">
										Nombre
									</span>
								</label>

								<input
									className="input input-bordered w-full"
									id="contact_name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									type="text"
									placeholder="Tu nombre"
									required
								/>
							</div>

							<div className="form-control">
								<label className="label" htmlFor="contact_email">
									<span className="label-text text-base-content font-semibold mb-2">
										Email
									</span>
								</label>

								<input
									className="input input-bordered w-full"
									id="contact_email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									type="email"
									placeholder="tu@email.com"
									required
								/>
							</div>

							<div className="form-control">
								<label className="label" htmlFor="contact_message">
									<span className="label-text text-base-content font-semibold mb-2">
										Mensaje
									</span>
								</label>
								<br />

								<textarea
									style={{ resize: 'none' }}
									className="textarea textarea-bordered min-h-[140px] w-full"
									id="contact_message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Escribe aquí tu mensaje..."
									required
								/>
							</div>

							<button type="submit" className="btn btn-primary w-full">
								Enviar mensaje
							</button>
						</form>
					</div>
				</div> */}

				{/* Información lateral */}
				{/* <div className="flex flex-col gap-6">
					<div className="card bg-base-200 shadow-xl">
						<div className="card-body">
							<h3 className="card-title text-2xl mb-4">Información de contacto</h3>

							<div className="space-y-4">
								<a
									href="mailto:raxdev.frontier@gmail.com"
									className="flex items-center gap-3 hover:text-primary transition-colors"
								>
									<SiGmail size={20} />
									<span>raxdev.frontier@gmail.com</span>
								</a>

								<a
									href="https://github.com/raxdevFrontier"
									target="_blank"
									rel="noreferrer"
									className="flex items-center gap-3 hover:text-primary transition-colors"
								>
									<SiGithub size={20} />
									<span>github.com/raxdevFrontier</span>
								</a>

								<a
									href="https://linkedin.com/in/oscar-HF"
									target="_blank"
									rel="noreferrer"
									className="flex items-center gap-3 hover:text-primary transition-colors"
								>
									<FaLinkedin size={20} />
									<span>linkedin.com/in/oscar-HF</span>
								</a>
							</div>
						</div>
					</div>

					<div className="card bg-primary text-primary-content shadow-xl">
						<div className="card-body">
							<h3 className="text-xl font-semibold">
								Siempre abierto a proyectos nuevos e interesantes
							</h3>

							<p className="opacity-90">
								Actualmente abierto a colaboraciones, proyectos frontend y
								oportunidades remotas.
							</p>
						</div>
					</div>
				</div> */}

				<aside className="card bg-base-200 shadow-xl">
					<div className="card-body">
						<h3 className="card-title text-xl md:text-2xl mb-4">
							{t.contact.cardTitle}
						</h3>

						<div className="space-y-4">
							<a
								href="mailto:raxdev.frontier@gmail.com"
								className="flex items-center gap-3 hover:text-primary transition-colors"
							>
								<SiGmail size={20} />
								<span>{t.contact.email}</span>
							</a>

							<a
								href="https://github.com/raxdevFrontier"
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-3 hover:text-primary transition-colors"
							>
								<SiGithub size={20} />
								<span>{t.contact.github}</span>
							</a>

							<a
								href="https://linkedin.com/in/oscar-HF"
								target="_blank"
								rel="noreferrer"
								className="flex items-center gap-3 hover:text-primary transition-colors"
							>
								<FaLinkedin size={20} />
								<span>{t.contact.linkedin}</span>
							</a>
						</div>
					</div>
				</aside>

				<aside className="card bg-primary text-primary-content shadow-xl">
					<div className="card-body">
						<h3 className="text-xl font-semibold">{t.contact.commentTitle}</h3>
						<p className="opacity-90">{t.contact.commentSubtitle}</p>
					</div>
				</aside>
			</div>
		</SectionWrapper>
	);
};

export default Contact;
