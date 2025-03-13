import { motion } from 'framer-motion'

export const SchoolsHistory = () => {
	return (
		<section className='py-16 bg-white'>
			<div className='grid md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
				<div>
					<motion.h2
						className='text-2xl md:text-3xl font-semibold text-blue-600 mb-8 text-center'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
					>
						Наша история
					</motion.h2>
					<motion.div
						className='prose max-w-3xl mx-auto text-gray-700 space-y-6 text-lg'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
						viewport={{ once: true }}
					>
						
						<p>
						Сегодня Antigen — это ведущая школа, где специалисты осваивают передовые методы лабораторных исследований, повышают квалификацию и получают востребованные навыки для успешной карьеры в медицинской сфере.

						</p>
					</motion.div>
				</div>

				<div className='relative w-full h-full aspect-square'>
					<img
						src='/images/professor.png'
						alt='Профессор Сущевский В.И.'
						className='object-cover object-top rounded-2xl'
					/>
				</div>
			</div>
		</section>
	)
}
