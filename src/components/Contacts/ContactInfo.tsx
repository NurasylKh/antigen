import { motion } from 'framer-motion'

export const ContactInfo = () => {
	return (
		<motion.div
			className='space-y-8'
			initial={{ opacity: 0, x: 50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<h2 className='text-2xl font-semibold text-blue-600'>
				Контактная информация
			</h2>
			<div className='space-y-4 text-gray-700'>
				<p>
					<span className='font-medium'>Адрес:</span> Алматинская область, Карасайский район, село Абай, улица К. Азербаева, 4
					
				</p>
				<p>
					<span className='font-medium'>Телефон:</span>{' '}
					<a href='tel:+79991234567' className='text-blue-600 hover:underline'>
					+7 (727) 341-05-99
					</a>
				</p>
				<p>
					<span className='font-medium'>Email:</span>{' '}
					<a
						href='mailto:info@kinesiology.ru'
						className='text-blue-600 hover:underline'
					>
						info@antigen.kz
					</a>
				</p>
			</div>

			{/* Карта */}
			<iframe
				className='w-full h-64 rounded-xl shadow-lg'
				src='https://yandex.by/map-widget/v1/?ll=76.765216%2C43.215586&mode=search&oid=9751523266&ol=biz&source=serp_navig&z=17'
				allowFullScreen
				loading='lazy'
			/>

			{/* Онлайн-чат */}
			<div className='flex flex-col sm:flex-row gap-4'>
				<a
					href='https://t.me/@ecomnur'
					target='_blank'
					rel='noopener noreferrer'
					className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-center'
				>
					Telegram
				</a>
				<a
					href='https://wa.me/77073437412'
					target='_blank'
					rel='noopener noreferrer'
					className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-center'
				>
					WhatsApp
				</a>
			</div>
		</motion.div>
	)
}
