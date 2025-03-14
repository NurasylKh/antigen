import { motion } from 'framer-motion'

const TEACHERS = [
	{
		name: 'Иван Иванов',
		bio: 'Врач-реабилитолог с 15-летним опытом. Автор методики восстановления через движение.',
		achievements: 'Лауреат премии "Здоровье России" 2020.',
		photo: 'https://russdoc.ru/wp-content/uploads/2021/10/Fedorov-285x190.jpg',
	},
	{
		name: 'Мария Петрова',
		bio: 'Специалист по кинезиологии, кандидат медицинских наук.',
		achievements: 'Разработчик 3 патентов школы.',
		photo: 'https://kubnews.ru/upload/iblock/800/80087bc7e4eab62449bc2615cd3c2774.jpg',
	},
	{
		name: 'Алексей Сидоров',
		bio: 'Массажист и тренер с международной практикой.',
		achievements: 'Обучил более 200 студентов.',
		photo: 'https://polit.ru/upload/iblock/d06/a69d5neaha8ov0h4i25eygpq77xxsidw.jpg',
	},
]

export const TeachersSection = () => {
	return (
		<section className='py-16 bg-white'>
			<div className='container mx-auto px-4'>
				<motion.h2
					className='text-2xl md:text-3xl font-semibold text-blue-600 mb-12 text-center'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					Наши преподаватели
				</motion.h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{TEACHERS.map((teacher, index) => (
						<motion.div
							key={teacher.name}
							className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center'
							initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
						>
							<img
								src={teacher.photo}
								alt={teacher.name}
								className='w-32 h-32 rounded-full mx-auto mb-4 object-cover'
							/>
							<h3 className='text-xl font-semibold text-blue-600 mb-2'>
								{teacher.name}
							</h3>
							<p className='text-gray-600 mb-2'>{teacher.bio}</p>
							<p className='text-gray-500 italic'>{teacher.achievements}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
