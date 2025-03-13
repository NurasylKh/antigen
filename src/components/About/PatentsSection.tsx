import { motion } from 'framer-motion'
import { ParallaxBanner } from 'react-scroll-parallax'

const PATENT_ITEMS = [
	{
		title: 'Современные лабораторные технологии',
		descr:
			'Авторская методика диагностики и активации глубоких мышечных слоев с помощью мануальных техник и кинезиотейпирования. Позволяет восстановить баланс и устранить хроническую усталость.',
		src: 'https://media.istockphoto.com/id/1364324877/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-%D0%B2%D1%80%D0%B0%D1%87-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7-%D0%B8-%D0%B4%D0%B8%D0%B0%D0%B3%D0%BD%D0%BE%D1%81%D1%82%D0%B8%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8C%D1%8F-%D0%BF%D0%B0%D1%86%D0%B8%D0%B5%D0%BD%D1%82%D0%B0-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%B8-%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82.jpg?s=612x612&w=0&k=20&c=MnsrG4Ip84X4dYHoEv4JcHw8iHUk_fXCCd3RwD9lLFI=',
	},
	{
		title: 'Клинический подход – обучение с учетом реальных медицинских случаев',
		descr:
			'Специальная методика коррекции осанки через работу с проприоцепцией и нейромышечной связью. Подходит для детей и взрослых, страдающих от сколиоза и других нарушений осанки.',
		src: 'https://sbermed.ai/_next/image?url=https%3A%2F%2Fsbermed.ai%2Fuploads%2Fmicrobiologist_with_protection_glasses_using_microscope_dressed_ppe_suit_scaled_66d89184a3.jpg&w=3840&q=75',
	},
	{
		title: 'Клинический подход – обучение с учетом реальных медицинских случаев',
		descr:
			'Уникальная техника сочетания мягкотканевого массажа и кинезиологических тестов для ускоренного восстановления после спортивных и бытовых травм.',
		src: 'https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22572_16533781526443229.jpg',
	},
]

export const PatentsSection = () => {
	return (
		<>
			<ParallaxBanner layers={[{ image: '/images/patents.jpg', speed: -20 }]}>
				<div className='overlay'></div>
				<div className='container mx-auto px-4 py-4 relative z-10'>
					<motion.h2
						className='text-2xl md:text-3xl font-semibold text-blue-400 mb-8 text-center'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
					>
						Ключевые методики обучения в Antigen:

					</motion.h2>
					<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{PATENT_ITEMS.map((patent, index) => (
							<motion.li
								key={patent.title}
								className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow'
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
							>
								<img
									src={patent.src}
									alt={patent.title}
									className='w-full h-44 object-cover rounded-md mb-4'
								/>
								<h3 className='text-center text-gray-700 font-medium text-lg mb-2'>
									{patent.title}
								</h3>
								<p className='text-center text-gray-600'>{patent.descr}</p>
							</motion.li>
						))}
					</ul>
				</div>
			</ParallaxBanner>
		</>
	)
}
