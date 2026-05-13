import React from 'react';
import { useState } from 'react';
import SectionWrapper from '@/components/sectionWrapper';
import { SiGithub, SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
	const [isSent, setIsSent] = useState(false);

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Simulación de envío
		setTimeout(() => {
			setIsSent(true);
		}, 500);

		// Limpiar formulario
		setFormData({
			name: '',
			email: '',
			message: '',
		});

		setTimeout(() => {
			setIsSent(false);
		}, 3000);
	};

	return (
		<SectionWrapper showDivider>
			<h2 id="contact" className="text-2xl font-bold tracking-tight sm:text-3xl">
				Contacto
			</h2>
			<p className="mt-3 mb-10 text-base opacity-70">
				¿Tienes una propuesta, proyecto o simplemente quieres hablar sobre frontend, React o
				diseño de interfaces? Estoy abierto a nuevas oportunidades y colaboraciones.
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Formulario */}
				<div className="card bg-base-200 shadow-xl">
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
									<span className="label-text">Nombre</span>
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
									<span className="label-text">Email</span>
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
									<span className="label-text">Mensaje</span>
								</label>
								<br />

								<textarea
									style={{ resize: 'none' }}
									className="textarea textarea-bordered min-h-[140px] w-full"
									id="contact_message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder="Cuéntame sobre tu proyecto..."
									required
								/>
							</div>

							<button type="submit" className="btn btn-primary w-full">
								Enviar mensaje
							</button>
						</form>
					</div>
				</div>

				{/* Información lateral */}
				<div className="flex flex-col gap-6">
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
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Contact;

// -----------------------------------

// import { Mail, Github, Linkedin } from "lucide-react";
// import { useState } from "react";

// export default function ContactSection() {
//   const [isSent, setIsSent] = useState(false);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Simulación de envío
//     setTimeout(() => {
//       setIsSent(true);
//     }, 500);
//   };

//   return (
//     <section
//       id="contact"
//       className="py-24 px-6 lg:px-12 bg-base-100"
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-14 text-center">
//           <h2 className="text-4xl font-bold mb-4">
//             Contáctame
//           </h2>

//           <p className="text-base-content/70 max-w-2xl mx-auto">
//             ¿Tienes una propuesta, proyecto o simplemente quieres
//             hablar sobre frontend, React o diseño de interfaces?
//             Estoy abierto a nuevas oportunidades y colaboraciones.
//           </p>
//         </div>

//         {/* Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Formulario */}
//           <div className="card bg-base-200 shadow-xl">
//             <div className="card-body">
//               <h3 className="card-title text-2xl mb-4">
//                 Envíame un mensaje
//               </h3>

//               {isSent && (
//                 <div className="alert alert-success mb-6">
//                   <span>
//                     Mensaje enviado correctamente.
//                   </span>
//                 </div>
//               )}

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-5"
//               >
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">
//                       Nombre
//                     </span>
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Tu nombre"
//                     className="input input-bordered w-full"
//                     required
//                   />
//                 </div>

//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">
//                       Email
//                     </span>
//                   </label>

//                   <input
//                     type="email"
//                     placeholder="tu@email.com"
//                     className="input input-bordered w-full"
//                     required
//                   />
//                 </div>

//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">
//                       Mensaje
//                     </span>
//                   </label>

//                   <textarea
//                     className="textarea textarea-bordered min-h-[140px]"
//                     placeholder="Cuéntame sobre tu proyecto..."
//                     required
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn btn-primary w-full"
//                 >
//                   Enviar mensaje
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Información lateral */}
//           <div className="flex flex-col gap-6">
//             <div className="card bg-base-200 shadow-xl">
//               <div className="card-body">
//                 <h3 className="card-title text-2xl mb-4">
//                   Información de contacto
//                 </h3>

//                 <div className="space-y-4">
//                   <a
//                     href="mailto:tuemail@email.com"
//                     className="flex items-center gap-3 hover:text-primary transition-colors"
//                   >
//                     <Mail size={20} />
//                     <span>tuemail@email.com</span>
//                   </a>

//                   <a
//                     href="https://github.com/tuusuario"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center gap-3 hover:text-primary transition-colors"
//                   >
//                     <Github size={20} />
//                     <span>github.com/tuusuario</span>
//                   </a>

//                   <a
//                     href="https://linkedin.com/in/tuusuario"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center gap-3 hover:text-primary transition-colors"
//                   >
//                     <Linkedin size={20} />
//                     <span>linkedin.com/in/tuusuario</span>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="card bg-primary text-primary-content shadow-xl">
//               <div className="card-body">
//                 <h3 className="text-xl font-semibold">
//                   Disponible para proyectos freelance
//                 </h3>

//                 <p className="opacity-90">
//                   Actualmente abierto a colaboraciones,
//                   proyectos frontend y oportunidades remotas.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
