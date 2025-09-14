import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa'
import { TbCurrencyDollar } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<footer
			className='relative max-[768px]:pt-[100px] bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white overflow-hidden'
			style={{
				clipPath: 'polygon(0 20%, 100% 0%, 100% 100%, 0% 100%)',
			}}
		>
			{/* Floating decorative elements */}
			<div className='absolute top-10 left-10 w-16 h-16 rounded-full bg-cyan-400/20 animate-pulse'></div>
			<div className='absolute top-20 right-20 w-12 h-12 rounded-full bg-pink-400/30 animate-bounce'></div>
			<div className='absolute bottom-10 left-1/3 w-8 h-8 rounded-full bg-yellow-400/25 animate-ping'></div>

			{/* Background overlay */}
			<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>

			<div className='relative z-10 max-w-6xl mx-auto px-4 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 space-y-6 sm:space-y-8'>
				{/* Header section */}
				<div className='text-center mb-8 sm:mb-12'>
					<div className='font-nosifer text-2xl sm:text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text mb-4 transform -rotate-1'>
						$DINO FAMILY
					</div>
					<div className='flex justify-center'>
						<div className='w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-4 border-white shadow-lg grid place-items-center animate-bounce overflow-hidden'>
							<img
								src='/src/assets/dino-happy.png'
								alt='Footer Dino'
								className='w-10 h-10 object-contain'
								onError={e => {
									e.target.style.display = 'none'
									e.target.nextSibling.style.display = 'block'
								}}
							/>
							<TbCurrencyDollar className='text-3xl text-white hidden' />
						</div>
					</div>
				</div>

				{/* Links section */}
				<div className='flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8'>
					<Link
						to='/legal'
						className='bg-teal-500 hover:bg-teal-400 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-white shadow-lg transform hover:scale-105 transition-all border-2 border-white text-sm sm:text-base'
					>
						Privacy & Terms
					</Link>
					<a
						href='#faq'
						className='bg-teal-500 hover:bg-teal-400 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-white shadow-lg transform hover:scale-105 transition-all border-2 border-white text-sm sm:text-base'
					>
						FAQ
					</a>
					<a
						href='#presale'
						className='bg-pink-500 hover:bg-pink-400 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-white shadow-lg transform hover:scale-105 transition-all border-2 border-white text-sm sm:text-base'
					>
						Buy $DINO
					</a>
				</div>

				{/* Disclaimer */}
				<div className='text-center max-w-4xl mx-auto px-2'>
					<p className='text-cyan-100 font-roboto leading-relaxed text-xs sm:text-sm'>
						🦖 Формирование будущего MemeCoins © Dino Family 2025 Все права
						защищены.
						<br className='hidden sm:block' />
						Отказ от ответственности: Посещая этот сайт, пользуясь нашими
						услугами или приобретая $DINO, вы соглашаетесь с нашими Условиями
						обслуживания и Политикой конфиденциальности.
						<br className='hidden sm:block' />
						Вы также понимаете, что никакая информация на этом сайте не является
						финансовой консультацией.
						<span className='text-yellow-300 font-bold'>
							$DINO — это мемкоин! 🚀
						</span>
					</p>
				</div>

				{/* Social links */}
				<div className='flex justify-center gap-4 sm:gap-6 pt-6 sm:pt-8'>
					<a
						href='https://twitter.com'
						className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 grid place-items-center text-white text-lg sm:text-xl hover:scale-110 transition-transform shadow-lg'
					>
						<FaTwitter />
					</a>
					<a
						href='https://t.me'
						className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center text-white text-lg sm:text-xl hover:scale-110 transition-transform shadow-lg'
					>
						<FaTelegram />
					</a>
					<a
						href='https://discord.gg'
						className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 grid place-items-center text-white text-lg sm:text-xl hover:scale-110 transition-transform shadow-lg'
					>
						<FaDiscord />
					</a>
				</div>
			</div>
		</footer>
	)
}
