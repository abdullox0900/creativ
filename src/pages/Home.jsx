import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { FaBitcoin, FaEthereum } from 'react-icons/fa'
import { SiDogecoin, SiSolana } from 'react-icons/si'
import { TbCurrencyDollar } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import aboutDinoImg from '../assets/about-dino-img.png'
import dino2Img from '../assets/dino-2.png'
import dinoImg from '../assets/dino-img.png'
import dinoLichGif from '../assets/video/dino-lich.gif'
import dinoTokenomicsGif from '../assets/video/dino-tokenomics.gif'
import dinosaurKaktusGif from '../assets/video/dinosaur-kaktus.gif'
import dinosaurMapGif from '../assets/video/dinosaur-map.gif'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroLines from '../components/HeroLines'
import ProgressLine from '../components/ProgressLine'
export default function Home() {
	const mainRef = useRef(null)
	const dinoRef = useRef(null)
	const dragonRef = useRef(null)
	const [dinosLoaded, setDinosLoaded] = useState({})

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		const sections = mainRef.current?.querySelectorAll('section') || []
		sections.forEach(sec => {
			gsap.fromTo(
				sec,
				{ opacity: 0, y: 40 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power2.out',
					scrollTrigger: { trigger: sec, start: 'top 80%' },
				}
			)
		})

		// Tokenomics animations
		const tokenomicsCards =
			mainRef.current?.querySelectorAll('.tokenomics-card') || []
		tokenomicsCards.forEach((card, i) => {
			gsap.fromTo(
				card,
				{
					x: i % 2 === 0 ? -100 : 100,
					opacity: 0,
					rotation: i % 2 === 0 ? -10 : 10,
				},
				{
					x: 0,
					opacity: 1,
					rotation: 0,
					duration: 0.8,
					ease: 'back.out(1.7)',
					delay: i * 0.2,
					scrollTrigger: {
						trigger: card,
						start: 'top 80%',
					},
				}
			)
		})

		// FAQ animations
		const faqItems = mainRef.current?.querySelectorAll('.faq-item') || []
		faqItems.forEach((item, i) => {
			gsap.fromTo(
				item,
				{ y: 50, opacity: 0, scale: 0.8 },
				{
					y: 0,
					opacity: 1,
					scale: 1,
					duration: 0.6,
					ease: 'elastic.out(1, 0.5)',
					delay: i * 0.1,
					scrollTrigger: {
						trigger: item,
						start: 'top 85%',
					},
				}
			)
		})

		if (dinoRef.current) {
			gsap.to(dinoRef.current, {
				yPercent: -10,
				repeat: -1,
				yoyo: true,
				duration: 2.4,
				ease: 'sine.inOut',
			})
		}

		// Dragon scroll-triggered animation (bottom-left to top-right)
		if (dragonRef.current) {
			gsap.to(dragonRef.current, {
				x: () => window.innerWidth - 128, // Move to right edge (accounting for 32*4 = 128px width)
				y: () => -(window.innerHeight - 80), // Move to top (accounting for 20*4 = 80px height)
				ease: 'none',
				scrollTrigger: {
					trigger: '#faq',
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1,
				},
			})
		}
	}, [])

	return (
		<div className='min-h-screen text-neutral-900 '>
			<ProgressLine />
			<Header />
			<main ref={mainRef}>
				<section className='relative lg:min-h-screen max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 pt-16 sm:pt-20 lg:pt-16 pb-8 lg:pb-0 flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center overflow-hidden'>
					<HeroLines />

					{/* Animated Cartoon Background Elements */}
					<div className='absolute inset-0 -z-10 overflow-hidden'>
						{/* Animated Grid Lines */}
						<div className='absolute inset-0 opacity-20'>
							{/* Vertical Lines */}
							{Array.from({ length: 12 }).map((_, i) => (
								<motion.div
									key={`v-${i}`}
									className='absolute top-0 bottom-0 w-px bg-gradient-to-b from-teal-400 to-green-500'
									style={{ left: `${(i + 1) * 8.33}%` }}
									animate={{
										opacity: [0.1, 0.6, 0.1],
										scaleY: [0.8, 1.2, 0.8],
									}}
									transition={{
										repeat: Infinity,
										duration: 4 + i * 0.3,
										ease: 'easeInOut',
										delay: i * 0.2,
									}}
								/>
							))}

							{/* Horizontal Lines */}
							{Array.from({ length: 8 }).map((_, i) => (
								<motion.div
									key={`h-${i}`}
									className='absolute left-0 right-0 h-px bg-gradient-to-r from-teal-400 to-green-500'
									style={{ top: `${(i + 1) * 12.5}%` }}
									animate={{
										opacity: [0.1, 0.6, 0.1],
										scaleX: [0.8, 1.2, 0.8],
									}}
									transition={{
										repeat: Infinity,
										duration: 3.5 + i * 0.4,
										ease: 'easeInOut',
										delay: i * 0.15,
									}}
								/>
							))}

							{/* Diagonal Moving Lines */}
							<motion.div
								className='absolute top-0 left-0 w-full h-full'
								style={{
									background: `repeating-linear-gradient(
										45deg,
										transparent,
										transparent 40px,
										rgba(20, 184, 166, 0.1) 41px,
										rgba(34, 197, 94, 0.1) 42px,
										transparent 43px
									)`,
								}}
								animate={{
									x: [-100, 100],
									opacity: [0.1, 0.3, 0.1],
								}}
								transition={{
									repeat: Infinity,
									duration: 8,
									ease: 'linear',
								}}
							/>

							<motion.div
								className='absolute top-0 left-0 w-full h-full'
								style={{
									background: `repeating-linear-gradient(
										-45deg,
										transparent,
										transparent 50px,
										rgba(20, 184, 166, 0.08) 51px,
										rgba(34, 197, 94, 0.08) 52px,
										transparent 53px
									)`,
								}}
								animate={{
									x: [100, -100],
									opacity: [0.1, 0.25, 0.1],
								}}
								transition={{
									repeat: Infinity,
									duration: 10,
									ease: 'linear',
									delay: 2,
								}}
							/>
						</div>

						{/* Floating Colorful Shapes */}
						<motion.div
							className='absolute top-20 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 opacity-60'
							animate={{
								x: [0, 50, -30, 0],
								y: [0, -40, 20, 0],
								scale: [1, 1.2, 0.8, 1],
								rotate: [0, 180, 360],
							}}
							transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
						/>

						<motion.div
							className='absolute top-40 right-20 w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 opacity-50'
							animate={{
								x: [0, -60, 40, 0],
								y: [0, 30, -50, 0],
								rotate: [0, -90, 90, 0],
								scale: [1, 0.7, 1.3, 1],
							}}
							transition={{
								repeat: Infinity,
								duration: 6,
								ease: 'easeInOut',
								delay: 1,
							}}
						/>

						<motion.div
							className='absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-70'
							style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
							animate={{
								x: [0, 70, -20, 0],
								y: [0, -60, 40, 0],
								rotate: [0, 120, 240, 360],
								scale: [1, 1.4, 0.6, 1],
							}}
							transition={{
								repeat: Infinity,
								duration: 10,
								ease: 'easeInOut',
								delay: 2,
							}}
						/>

						<motion.div
							className='absolute top-60 left-1/2 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 opacity-60'
							style={{ borderRadius: '50% 20% 80% 40%' }}
							animate={{
								x: [0, -40, 60, 0],
								y: [0, 50, -30, 0],
								rotate: [0, -180, 180, 0],
								scale: [1, 0.5, 1.5, 1],
							}}
							transition={{
								repeat: Infinity,
								duration: 7,
								ease: 'easeInOut',
								delay: 3,
							}}
						/>

						{/* Bouncing Stars/Sparkles */}
						<motion.div
							className='absolute top-16 right-1/3 text-4xl opacity-80'
							animate={{
								y: [0, -20, 0],
								rotate: [0, 360],
								scale: [1, 1.3, 1],
							}}
							transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
						>
							⭐
						</motion.div>

						<motion.div
							className='absolute bottom-20 right-10 text-3xl opacity-70'
							animate={{
								y: [0, -30, 0],
								rotate: [0, -360],
								scale: [1, 1.5, 1],
							}}
							transition={{
								repeat: Infinity,
								duration: 4,
								ease: 'easeInOut',
								delay: 1.5,
							}}
						>
							✨
						</motion.div>

						<motion.div
							className='absolute top-1/3 left-20 text-2xl opacity-60'
							animate={{
								x: [0, 20, 0],
								y: [0, -15, 0],
								rotate: [0, 180, 360],
								scale: [1, 1.2, 1],
							}}
							transition={{
								repeat: Infinity,
								duration: 5,
								ease: 'easeInOut',
								delay: 2.5,
							}}
						>
							🚀
						</motion.div>

						<motion.div
							className='absolute bottom-40 left-10 text-3xl opacity-75'
							animate={{
								x: [0, 30, 0],
								y: [0, -25, 0],
								rotate: [0, -180, 0],
								scale: [1, 0.8, 1.4, 1],
							}}
							transition={{
								repeat: Infinity,
								duration: 6,
								ease: 'easeInOut',
								delay: 4,
							}}
						>
							💎
						</motion.div>

						{/* Floating Lines/Trails */}
						<motion.div
							className='absolute top-24 left-1/3 w-32 h-1 bg-gradient-to-r from-pink-500 to-transparent opacity-50'
							animate={{
								x: [0, 100, -50, 0],
								scaleX: [1, 1.5, 0.5, 1],
								opacity: [0.5, 0.8, 0.3, 0.5],
							}}
							transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
						/>

						<motion.div
							className='absolute bottom-24 right-1/4 w-24 h-1 bg-gradient-to-l from-cyan-500 to-transparent opacity-60'
							animate={{
								x: [0, -80, 40, 0],
								scaleX: [1, 0.5, 1.8, 1],
								opacity: [0.6, 0.9, 0.2, 0.6],
							}}
							transition={{
								repeat: Infinity,
								duration: 7,
								ease: 'easeInOut',
								delay: 3,
							}}
						/>

						{/* Pulsing Circles */}
						<motion.div
							className='absolute top-52 right-16 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-40'
							animate={{
								scale: [1, 2, 1],
								opacity: [0.4, 0.8, 0.4],
							}}
							transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
						/>

						<motion.div
							className='absolute bottom-16 left-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 opacity-50'
							animate={{
								scale: [1, 1.8, 1],
								opacity: [0.5, 0.9, 0.5],
							}}
							transition={{
								repeat: Infinity,
								duration: 3,
								ease: 'easeInOut',
								delay: 2,
							}}
						/>
					</div>

					{/* Content Section */}
					<div className='lg:order-1 space-y-6 text-center lg:text-left'>
						<h1 className='text-lg sm:text-xl lg:text-[26px] font-nosifer leading-tight text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text mt-8 sm:mt-12'>
							WELCOME TO $DINO TOKEN PRESALE
						</h1>
						<div className='flex justify-center lg:justify-start'>
							<img
								src={dinoImg}
								alt='DINO Token'
								className='w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[450px] h-auto object-contain'
							/>
						</div>
						<p className='text-neutral-600 text-sm lg:text-base max-w-prose font-roboto mx-auto lg:mx-0'>
							Legendary meme vibes meet clean design. Jump in early and ride
							with the Dino family.
						</p>
						<div className='flex flex-col sm:flex-row gap-3 justify-center lg:justify-start'>
							<a
								href='#presale'
								className='px-5 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all'
							>
								Buy $DINO
							</a>
							<Link
								to='/whitepaper'
								className='px-5 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all'
							>
								Whitepaper
							</Link>
						</div>
					</div>
					{/* Calculator Section */}
					<div className='lg:order-2 relative flex justify-center lg:justify-end w-full'>
						<div
							id='presale'
							className='bg-white rounded-xl border border-black/10 p-4 shadow-xl w-full max-w-sm'
						>
							{/* Price Header */}
							<div className='flex justify-between items-center mb-3'>
								<span className='text-emerald-600 font-bold text-sm'>
									$DINO PRICE =
								</span>
								<span className='text-rose-500 text-lg font-bold'>$0.0055</span>
							</div>

							{/* Progress Bar */}
							<div className='mb-3'>
								<div className='bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg p-2 flex items-center justify-between'>
									<span className='text-white font-bold text-xs'>
										NEXT PRICE INCREASE
									</span>
									<div className='w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center'>
										<TbCurrencyDollar className='text-lg text-white' />
									</div>
								</div>
							</div>

							{/* Price Info */}
							<div className='grid grid-cols-2 gap-2 mb-3'>
								<div>
									<p className='text-emerald-600 font-bold mb-1 text-xs'>
										NEXT PRICE
									</p>
									<div className='bg-neutral-100 rounded-lg p-2'>
										<span className='text-neutral-900 text-sm font-bold'>
											$0.0058
										</span>
									</div>
								</div>
								<div>
									<p className='text-emerald-600 font-bold mb-1 text-xs'>
										USDT RAISED
									</p>
									<div className='bg-neutral-100 rounded-lg p-2'>
										<span className='text-neutral-900 text-sm font-bold'>
											$2.8M
										</span>
									</div>
								</div>
							</div>

							{/* Calculator */}
							<div className='space-y-3'>
								<div className='flex gap-2'>
									<div className='flex-1'>
										<p className='text-emerald-600 font-bold mb-1 text-xs'>
											PAY WITH ETH
										</p>
										<div className='bg-neutral-100 rounded-lg p-2 flex items-center justify-between'>
											<input
												className='bg-transparent text-neutral-900 text-sm flex-1 outline-none'
												placeholder='0'
											/>
											<button className='text-emerald-700 bg-neutral-200 px-2 py-1 rounded text-xs'>
												MAX
											</button>
										</div>
									</div>
									<div className='flex items-end'>
										<button className='bg-emerald-500 text-white px-3 py-2 rounded-lg font-bold text-xs'>
											ETH ▼
										</button>
									</div>
								</div>

								<div>
									<p className='text-emerald-600 font-bold mb-1 text-xs'>
										YOU RECEIVE
									</p>
									<div className='bg-neutral-100 rounded-lg p-2'>
										<span className='text-neutral-900 text-sm'>0</span>
									</div>
								</div>

								{/* Buttons */}
								<button className='w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg font-bold text-xs shadow-lg hover:shadow-xl transform hover:scale-105 transition-all'>
									BUY & STAKE 913% APY
								</button>

								<button className='w-full bg-emerald-500 text-white py-2 rounded-lg font-bold text-xs shadow-lg hover:shadow-xl transform hover:scale-105 transition-all'>
									BUY $DINO
								</button>

								{/* Balance */}
								<div className='bg-neutral-100 rounded-lg p-2 flex items-center justify-between'>
									<span className='text-emerald-600 font-bold text-xs'>
										DINO BALANCE
									</span>
									<div className='flex items-center gap-1'>
										<TbCurrencyDollar className='text-lg text-green-500' />
										<span className='text-neutral-900 text-sm font-bold'>
											0
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600'>
					<div className='absolute inset-0 bg-gradient-to-br from-indigo-500/40 via-purple-500/40 to-pink-500/40'></div>

					{/* Enhanced Floating elements */}
					<div className='absolute top-16 left-16 w-32 h-32 rounded-full bg-cyan-300/30 animate-pulse'></div>
					<div className='absolute bottom-24 left-24 w-20 h-20 rounded-full bg-yellow-300/40 animate-bounce'></div>
					<div className='absolute top-1/3 left-12 w-16 h-16 rounded-full bg-green-300/50 animate-ping'></div>
					<div className='absolute top-20 right-20 w-24 h-24 rounded-full bg-pink-300/35 animate-pulse delay-500'></div>
					<div className='absolute bottom-32 right-32 w-16 h-16 rounded-full bg-blue-300/45 animate-bounce delay-300'></div>

					<div className='relative z-10 min-h-screen max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center'>
						{/* Left Content */}
						<div className='space-y-8'>
							<motion.h2
								className='text-3xl sm:text-4xl lg:text-5xl font-nosifer text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text drop-shadow-2xl'
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, ease: 'easeOut' }}
								viewport={{ once: true }}
							>
								About $DINO Family
							</motion.h2>

							<motion.p
								className='text-white text-base sm:text-lg font-roboto leading-relaxed max-w-2xl backdrop-blur-sm bg-white/10 p-4 sm:p-6 rounded-2xl border border-white/20'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								viewport={{ once: true }}
							>
								$DINO is a playful tribute to internet culture with clean,
								confident visuals. Built for community and fun, combining meme
								culture with serious blockchain innovation.
							</motion.p>

							{/* Feature highlights */}
							<motion.div
								className='grid grid-cols-1 sm:grid-cols-2 gap-4'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
								viewport={{ once: true }}
							>
								{[
									{
										icon: <SiDogecoin className='text-2xl text-yellow-400' />,
										title: 'Community Driven',
										desc: 'Built by the people, for the people',
									},
									{
										icon: <FaEthereum className='text-2xl text-blue-400' />,
										title: 'Lightning Fast',
										desc: 'Powered by Ethereum technology',
									},
									{
										icon: <FaBitcoin className='text-2xl text-orange-400' />,
										title: 'Premium Quality',
										desc: 'Clean design meets innovation',
									},
									{
										icon: <SiSolana className='text-2xl text-purple-400' />,
										title: 'Global Reach',
										desc: 'Connecting crypto enthusiasts worldwide',
									},
								].map((feature, i) => (
									<div
										key={i}
										className='bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-105'
									>
										<div className='mb-2'>{feature.icon}</div>
										<h3 className='text-yellow-300 font-bold text-sm mb-1'>
											{feature.title}
										</h3>
										<p className='text-white/80 text-xs'>{feature.desc}</p>
									</div>
								))}
							</motion.div>

							<motion.div
								className='flex gap-4 pt-4'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.6 }}
								viewport={{ once: true }}
							>
								<Link
									to='/whitepaper'
									className='max-[768px]:px-2 max-[768px]:py-2 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20'
								>
									WHITEPAPER
								</Link>
								<a
									href='#presale'
									className='max-[768px]:px-2 max-[768px]:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20'
								>
									BUY NOW
								</a>
							</motion.div>
						</div>

						{/* Right Image */}
						<motion.div
							className='relative flex justify-center lg:justify-end'
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<div className='relative'>
								{/* Image with enhanced styling */}
								<div className='relative rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl transform hover:scale-105 transition-all duration-500'>
									<img
										src={aboutDinoImg}
										alt='About DINO Family'
										className='w-full max-w-lg h-auto object-cover'
									/>
									{/* Overlay gradient */}
									<div className='absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-cyan-400/20'></div>
								</div>

								{/* Floating decorative elements around image */}
								<motion.div
									className='absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg'
									animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
									transition={{
										repeat: Infinity,
										duration: 4,
										ease: 'easeInOut',
									}}
								>
									<span className='text-white font-bold text-xl'>$</span>
								</motion.div>

								<motion.div
									className='absolute -top-2 -right-6 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg'
									animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
									transition={{
										repeat: Infinity,
										duration: 3,
										ease: 'easeInOut',
										delay: 0.5,
									}}
								></motion.div>

								<motion.div
									className='absolute -bottom-6 -left-2 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg'
									animate={{ y: [0, -12, 0], rotate: [0, -180, -360] }}
									transition={{
										repeat: Infinity,
										duration: 5,
										ease: 'easeInOut',
										delay: 1,
									}}
								>
									<span className='text-white font-bold'>🦕</span>
								</motion.div>

								<motion.div
									className='absolute -bottom-2 -right-4 w-6 h-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-full shadow-lg'
									animate={{ y: [0, -6, 0], x: [0, -3, 0] }}
									transition={{
										repeat: Infinity,
										duration: 2.5,
										ease: 'easeInOut',
										delay: 1.5,
									}}
								></motion.div>
							</div>
						</motion.div>
					</div>
				</section>

				<section
					id='how-to-buy'
					className='h-screen relative flex justify-center items-center max-[768px]:h-auto max-[768px]:py-16 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500'
				>
					<div className='absolute inset-0 bg-gradient-to-br from-purple-400/30 via-blue-400/30 to-teal-400/30'></div>

					{/* Dino Lich GIF Background */}
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 opacity-20'>
						<img
							src={dinoLichGif}
							alt='Dino Lich Background'
							className='w-96 h-96 object-contain'
						/>
					</div>

					{/* Floating space elements */}
					<div className='absolute top-20 left-20 w-20 h-20 rounded-full bg-blue-200/30 animate-pulse'></div>
					<div className='absolute bottom-40 right-20 w-32 h-32 rounded-full bg-purple-200/20 animate-pulse delay-100'></div>
					<div className='absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-pink-200/40 animate-bounce'></div>

					<div className='relative z-10 flex flex-col justify-center items-center px-4'>
						<h2 className='text-4xl lg:text-5xl font-nosifer text-center mb-12 text-yellow-300 drop-shadow-lg transform rotate-2'>
							how to buy
						</h2>

						<div className='grid md:grid-cols-3 gap-8 max-w-6xl w-full'>
							{/* Step 1 */}
							<div className='relative'>
								<div className='bg-pink-300 rounded-lg px-3 py-1 text-xs font-bold text-gray-800 mb-3 inline-block'>
									STEP 1
								</div>
								<div className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl'>
									<h3 className='text-yellow-300 font-bold text-xl mb-3'>
										CONNECT WALLET
									</h3>
									<p className='text-white text-sm leading-relaxed'>
										CONNECT YOUR CRYPTO WALLET (WE RECOMMEND METAMASK). THIS IS
										YOUR GATEWAY TO THE DINO ECOSYSTEM. MAKE SURE YOUR WALLET IS
										LOADED WITH ETH, USDT, OR YOU CAN USE FIAT CARD PAYMENT TO
										PARTICIPATE.
									</p>
								</div>
								<div className='absolute -top-4 -right-4 animate-bounce'>
									<img
										src='/src/assets/dino-happy.png'
										alt='Happy Dino Decoration'
										className='w-10 h-10 object-contain'
										onError={e => {
											e.target.style.display = 'none'
											e.target.nextSibling.style.display = 'block'
										}}
									/>
									<div className='w-10 h-10 text-4xl text-green-500 hidden'>
										<SiDogecoin />
									</div>
								</div>
							</div>

							{/* Step 2 */}
							<div className='relative'>
								<div className='bg-pink-300 rounded-lg px-3 py-1 text-xs font-bold text-gray-800 mb-3 inline-block'>
									STEP 2
								</div>
								<div className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl'>
									<h3 className='text-yellow-300 font-bold text-xl mb-3'>
										ENTER THE AMOUNT
									</h3>
									<p className='text-white text-sm leading-relaxed'>
										AFTER SELECTING ETH, USDT OR CARD FROM THE DROP DOWN MENU,
										ENTER THE AMOUNT YOU WANT TO PURCHASE AND SEE THE
										CORRESPONDING AMOUNT OF $DINO TOKENS. SECURE YOUR SPOT EARLY
										AND BE PART OF THE FUTURE OF BLOCKCHAIN INNOVATION.
									</p>
								</div>
							</div>

							{/* Step 3 */}
							<div className='relative'>
								<div className='bg-pink-300 rounded-lg px-3 py-1 text-xs font-bold text-gray-800 mb-3 inline-block'>
									STEP 3
								</div>
								<div className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl'>
									<h3 className='text-yellow-300 font-bold text-xl mb-3'>
										BUY / BUY & STAKE
									</h3>
									<p className='text-white text-sm leading-relaxed'>
										PRESS "BUY & STAKE" OR "BUY NOW" DEPENDING ON IF YOU WISH TO
										STAKE OR NOT. CONFIRM THE TRANSACTION IN YOUR WALLET ONCE
										THE POP-UP APPEARS. REMEMBER TO HAVE ENOUGH IN YOUR WALLET
										FOR GAS FEES.
									</p>
								</div>
								<div className='absolute -top-4 -right-4 animate-bounce delay-200'>
									<img
										src='/src/assets/dino-flying.png'
										alt='Flying Dino Decoration'
										className='w-10 h-10 object-contain'
										onError={e => {
											e.target.style.display = 'none'
											e.target.nextSibling.style.display = 'block'
										}}
									/>
									<div className='w-10 h-10 text-4xl text-blue-500 hidden'>
										<FaEthereum />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='min-h-screen relative overflow-hidden bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-500'>
					<div className='absolute inset-0 bg-gradient-to-r from-cyan-300/20 via-teal-300/20 to-cyan-400/20'></div>

					{/* Floating Dollar Icon */}
					<div className='absolute top-20 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-2xl flex items-center justify-center animate-bounce border-4 border-white'>
						<TbCurrencyDollar className='text-3xl text-white' />
						<div className='absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full animate-ping'></div>
					</div>

					<div className='relative z-10 min-h-screen max-w-7xl mx-auto px-4 py-16 flex flex-col justify-center'>
						<motion.h2
							className='text-4xl lg:text-5xl font-nosifer text-white drop-shadow-lg text-center mb-16'
							initial={{ opacity: 0, y: -30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
							viewport={{ once: true }}
						>
							toKeNoMiCs
						</motion.h2>

						{/* Grid Layout */}
						<div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto'>
							{/* Presale - 45.5% */}
							<motion.div
								className='tokenomics-card'
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
								viewport={{ once: true }}
							>
								<div className='bg-white rounded-2xl p-4 lg:p-6 border-4 border-teal-500 shadow-2xl h-full'>
									<div className='bg-pink-400 rounded-lg px-3 py-2 text-sm font-bold text-white mb-3 inline-block'>
										45.5%
									</div>
									<h3 className='text-teal-600 font-bold text-lg'>Presale</h3>
								</div>
							</motion.div>

							{/* Staking - 25% */}
							<motion.div
								className='tokenomics-card'
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<div className='bg-white rounded-2xl p-4 lg:p-6 border-4 border-teal-500 shadow-2xl h-full'>
									<div className='bg-pink-400 rounded-lg px-3 py-2 text-sm font-bold text-white mb-3 inline-block'>
										25%
									</div>
									<h3 className='text-teal-600 font-bold text-lg'>Staking</h3>
								</div>
							</motion.div>

							{/* Ecosystem Development - 15% */}
							<motion.div
								className='tokenomics-card'
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								viewport={{ once: true }}
							>
								<div className='bg-white rounded-2xl p-4 lg:p-6 border-4 border-teal-500 shadow-2xl h-full'>
									<div className='bg-pink-400 rounded-lg px-3 py-2 text-sm font-bold text-white mb-3 inline-block'>
										15%
									</div>
									<h3 className='text-teal-600 font-bold text-lg'>
										Ecosystem Development
									</h3>
								</div>
							</motion.div>

							{/* Marketing - 8% */}
							<motion.div
								className='tokenomics-card'
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
							>
								<div className='bg-white rounded-2xl p-4 lg:p-6 border-4 border-teal-500 shadow-2xl h-full'>
									<div className='bg-pink-400 rounded-lg px-3 py-2 text-sm font-bold text-white mb-3 inline-block'>
										8%
									</div>
									<h3 className='text-teal-600 font-bold text-lg'>Marketing</h3>
								</div>
							</motion.div>

							{/* Foundation/Reserve - 5% */}
							<motion.div
								className='tokenomics-card'
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.5 }}
								viewport={{ once: true }}
							>
								<div className='bg-white rounded-2xl p-4 lg:p-6 border-4 border-teal-500 shadow-2xl h-full'>
									<div className='bg-pink-400 rounded-lg px-3 py-2 text-sm font-bold text-white mb-3 inline-block'>
										5%
									</div>
									<h3 className='text-teal-600 font-bold text-lg'>
										Foundation/Reserve
									</h3>
								</div>
							</motion.div>

							{/* Community Rewards - 3.5% */}
							<motion.div
								className='tokenomics-card'
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								viewport={{ once: true }}
							>
								<div className='bg-white rounded-2xl p-4 lg:p-6 border-4 border-teal-500 shadow-2xl h-full'>
									<div className='bg-pink-400 rounded-lg px-3 py-2 text-sm font-bold text-white mb-3 inline-block'>
										3.5%
									</div>
									<h3 className='text-teal-600 font-bold text-lg'>
										Community Rewards
									</h3>
								</div>
							</motion.div>

							{/* Exchange Listings - 2.5% */}
							<motion.div
								className='tokenomics-card'
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.7 }}
								viewport={{ once: true }}
							>
								<div className='bg-white rounded-2xl p-4 lg:p-6 border-4 border-teal-500 shadow-2xl h-full'>
									<div className='bg-pink-400 rounded-lg px-3 py-2 text-sm font-bold text-white mb-3 inline-block'>
										2.5%
									</div>
									<h3 className='text-teal-600 font-bold text-lg'>
										Exchange Listings
									</h3>
								</div>
							</motion.div>

							{/* Charity/Impact - 1% */}
							<motion.div
								className='tokenomics-card'
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.8 }}
								viewport={{ once: true }}
							>
								<div className='bg-white rounded-2xl p-4 lg:p-6 border-4 border-teal-500 shadow-2xl h-full'>
									<div className='bg-pink-400 rounded-lg px-3 py-2 text-sm font-bold text-white mb-3 inline-block'>
										1%
									</div>
									<h3 className='text-teal-600 font-bold text-lg'>
										Charity/Impact
									</h3>
								</div>
							</motion.div>

							{/* Dino Tokenomics GIF - Bottom Right */}
							<motion.div
								className='absolute -bottom-16 -right-8 z-20'
								initial={{ opacity: 0, x: 200 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
								viewport={{ once: true }}
							>
								<img
									src={dinoTokenomicsGif}
									alt='Dino Tokenomics'
									className='w-48 h-48 object-contain'
								/>
							</motion.div>
						</div>
					</div>
				</section>

				<section className='min-h-screen relative bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400'>
					<div className='absolute inset-0 bg-gradient-to-br from-yellow-300/30 via-orange-300/30 to-red-300/30'></div>
					<div className='relative z-10 min-h-screen max-w-7xl mx-auto px-4 py-16'>
						{/* Header */}
						<motion.h2
							className='text-4xl lg:text-5xl font-nosifer text-green-400 drop-shadow-lg transform -rotate-3 text-center mb-12'
							initial={{ opacity: 0, y: -30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
							viewport={{ once: true }}
						>
							RoadMap
						</motion.h2>

						{/* Phase Cards Grid with Overflowing Video */}
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative'>
							{/* Phase 1 */}
							<motion.div
								className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl transform hover:scale-105 transition-transform'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
								viewport={{ once: true }}
							>
								<div className='bg-pink-300 rounded-lg px-3 py-1 text-xs font-bold text-gray-800 mb-3 inline-block'>
									PHASE 1
								</div>
								<h3 className='text-yellow-300 font-bold text-xl mb-3'>
									COMMUNITY UPRISING
								</h3>
								<ul className='text-white text-sm space-y-2'>
									<li>• Grow Telegram, Twitter, and other platforms</li>
									<li>• Launch creative and daring marketing initiatives</li>
									<li>• Appoint passionate community leaders</li>
									<li>• Complete early presale stages</li>
								</ul>
							</motion.div>

							{/* Phase 2 */}
							<motion.div
								className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl transform hover:scale-105 transition-transform'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<div className='bg-pink-300 rounded-lg px-3 py-1 text-xs font-bold text-gray-800 mb-3 inline-block'>
									PHASE 2
								</div>
								<h3 className='text-yellow-300 font-bold text-xl mb-3'>
									THE GENESIS
								</h3>
								<ul className='text-white text-sm space-y-2'>
									<li>• Launch the DINO website and socials</li>
									<li>• Begin presale and onboard the early believers</li>
									<li>• Kickstart marketing campaign</li>
								</ul>
							</motion.div>

							{/* Phase 3 */}
							<motion.div
								className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl transform hover:scale-105 transition-transform'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								viewport={{ once: true }}
							>
								<div className='bg-pink-300 rounded-lg px-3 py-1 text-xs font-bold text-gray-800 mb-3 inline-block'>
									PHASE 3
								</div>
								<h3 className='text-yellow-300 font-bold text-xl mb-3'>
									THE BREAKTHROUGH
								</h3>
								<ul className='text-white text-sm space-y-2'>
									<li>• Conquer final stages of the presale</li>
									<li>• Achieve 50,000+ members across socials</li>
									<li>• Claim DINO's spot in the spotlight</li>
									<li>• Finalize all preparations for token allocation</li>
								</ul>
							</motion.div>

							{/* Phase 4 */}
							<motion.div
								className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl transform hover:scale-105 transition-transform'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								viewport={{ once: true }}
							>
								<div className='bg-pink-300 rounded-lg px-3 py-1 text-xs font-bold text-gray-800 mb-3 inline-block'>
									PHASE 4
								</div>
								<h3 className='text-yellow-300 font-bold text-xl mb-3'>
									DINO UNCHAINED
								</h3>
								<ul className='text-white text-sm space-y-2'>
									<li>
										• Officially launch $DINO and bring the full ecosystem
										online
									</li>
									<li>• Introduce governance and utilities</li>
									<li>
										• Partner with developers to expand the DINO ecosystem
									</li>
								</ul>
							</motion.div>

							{/* Phase 5 */}
							<motion.div
								className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl transform hover:scale-105 transition-transform'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.5 }}
								viewport={{ once: true }}
							>
								<div className='bg-pink-300 rounded-lg px-3 py-1 text-xs font-bold text-gray-800 mb-3 inline-block'>
									PHASE 5
								</div>
								<h3 className='text-yellow-300 font-bold text-xl mb-3'>
									THE INFINITE FUTURE
								</h3>
								<ul className='text-white text-sm space-y-2'>
									<li>
										• Roll out upgrades, partnerships, and cross-chain
										integrations
									</li>
									<li>• Introduce community-driven governance</li>
									<li>• Solidify DINO's position as the ultimate memecoin</li>
								</ul>
							</motion.div>

							{/* Overflowing Video on Right */}
							<motion.div
								className='absolute -right-[100px] bottom-[-400px] w-80 h-full'
								initial={{ opacity: 0, x: 100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.6 }}
								viewport={{ once: true }}
							>
								<div className='relative h-full'>
									{/* Half-visible video that extends to bottom */}
									<div className='absolute bottom-0 right-0 w-64 h-96 overflow-hidden transition-all duration-500'>
										<img
											src={dinosaurMapGif}
											alt='Dinosaur Map Roadmap'
											className='w-full h-full object-cover'
										/>
										{/* Overlay gradient */}
									</div>

									<motion.div
										className='absolute top-8 right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg'
										animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
										transition={{
											repeat: Infinity,
											duration: 3,
											ease: 'easeInOut',
											delay: 0.5,
										}}
									></motion.div>

									<motion.div
										className='absolute bottom-20 left-2 w-10 h-10 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg'
										animate={{ y: [0, -12, 0], rotate: [0, -180, -360] }}
										transition={{
											repeat: Infinity,
											duration: 5,
											ease: 'easeInOut',
											delay: 1,
										}}
									></motion.div>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Play Now Section */}
				<section
					id='play-now'
					className='min-h-screen relative overflow-hidden bg-white'
				>
					<div className='relative z-20 min-h-screen max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center'>
						{/* Right Image */}
						<motion.div
							className='relative flex justify-center lg:justify-end order-2 lg:order-2'
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<div className='relative'>
								{/* Image with enhanced styling */}
								<div className='relative rounded-3xl overflow-hidden border-4 border-cyan-500/50 shadow-2xl transform hover:scale-105 transition-all duration-500'>
									<img
										src={dino2Img}
										alt='Dino Game Character'
										className='w-full max-w-lg h-auto object-cover'
									/>
									{/* Overlay gradient */}
									<div className='absolute inset-0 bg-gradient-to-t from-cyan-600/20 via-transparent to-blue-400/20'></div>
								</div>

								{/* Floating decorative elements around Image */}
								<motion.div
									className='absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg'
									animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
									transition={{
										repeat: Infinity,
										duration: 4,
										ease: 'easeInOut',
									}}
								>
									<span className='text-white text-xl'>🎮</span>
								</motion.div>

								<motion.div
									className='absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg'
									animate={{ y: [0, -8, 0], rotate: [0, -180, -360] }}
									transition={{
										repeat: Infinity,
										duration: 3.5,
										ease: 'easeInOut',
										delay: 0.5,
									}}
								>
									<span className='text-white text-sm'>🚀</span>
								</motion.div>

								<motion.div
									className='absolute top-1/2 -left-6 w-8 h-8 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg'
									animate={{ x: [0, -8, 0], rotate: [0, 90, 180] }}
									transition={{
										repeat: Infinity,
										duration: 4.5,
										ease: 'easeInOut',
										delay: 1,
									}}
								>
									<span className='text-white text-xs'>⭐</span>
								</motion.div>
							</div>
						</motion.div>

						{/* Left Content - Play Now */}
						<div className='space-y-8 px-4 md:px-0 order-1 lg:order-1'>
							<motion.h2
								className='text-3xl md:text-4xl lg:text-5xl font-nosifer text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text drop-shadow-lg transform rotate-1'
								initial={{ opacity: 0, y: -30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, ease: 'easeOut' }}
								viewport={{ once: true }}
							>
								PLAY NOW
							</motion.h2>

							<motion.div
								className='space-y-6'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<div className='bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 md:p-8 shadow-lg border border-cyan-200'>
									<h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-4'>
										🎮 Start Your Adventure
									</h3>
									<p className='text-gray-700 text-sm md:text-base leading-relaxed mb-6'>
										Join the DINO ecosystem and experience the next generation
										of blockchain gaming. Collect, trade, and battle with your
										unique dinosaur characters in an immersive metaverse.
									</p>
									<div className='flex flex-col sm:flex-row gap-4'>
										<button className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm md:text-base shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20'>
											PLAY GAME
										</button>
										<button className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-bold text-sm md:text-base shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20'>
											JOIN COMMUNITY
										</button>
									</div>
								</div>

								<div className='bg-gradient-to-r from-green-50 to-cyan-50 rounded-2xl p-6 md:p-8 shadow-lg border border-green-200'>
									<h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-4'>
										🏆 Earn Rewards
									</h3>
									<p className='text-gray-700 text-sm md:text-base leading-relaxed'>
										Complete quests, win battles, and earn $DINO tokens. The
										more you play, the more you earn. Stake your tokens for
										additional passive income and exclusive rewards.
									</p>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				<section
					id='faq'
					className='min-h-screen relative overflow-hidden bg-[#fff]'
				>
					<div className='relative z-20 min-h-screen max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center'>
						{/* Left GIF */}
						<motion.div
							className='relative flex justify-center lg:justify-start'
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<div className='relative'>
								{/* GIF with enhanced styling */}
								<div className='relative rounded-3xl overflow-hidden border-4 border-emerald-500/50 shadow-2xl transform hover:scale-105 transition-all duration-500'>
									<img
										src={dinosaurKaktusGif}
										alt='Dinosaur Kaktus FAQ'
										className='w-full max-w-lg h-auto object-cover'
									/>
									{/* Overlay gradient */}
									<div className='absolute inset-0 bg-gradient-to-t from-emerald-600/20 via-transparent to-teal-400/20'></div>
								</div>

								{/* Floating decorative elements around GIF */}
								<motion.div
									className='absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg'
									animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
									transition={{
										repeat: Infinity,
										duration: 4,
										ease: 'easeInOut',
									}}
								>
									<span className='text-white font-bold text-xl'>🌵</span>
								</motion.div>

								<motion.div
									className='absolute -top-2 -left-6 w-8 h-8 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full shadow-lg'
									animate={{ y: [0, -8, 0], x: [0, -5, 0] }}
									transition={{
										repeat: Infinity,
										duration: 3,
										ease: 'easeInOut',
										delay: 0.5,
									}}
								></motion.div>

								<motion.div
									className='absolute -bottom-6 -right-2 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg'
									animate={{ y: [0, -12, 0], rotate: [0, -180, -360] }}
									transition={{
										repeat: Infinity,
										duration: 5,
										ease: 'easeInOut',
										delay: 1,
									}}
								>
									<span className='text-white font-bold'>❓</span>
								</motion.div>

								<motion.div
									className='absolute -bottom-2 -left-4 w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full shadow-lg'
									animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
									transition={{
										repeat: Infinity,
										duration: 2.5,
										ease: 'easeInOut',
										delay: 1.5,
									}}
								></motion.div>
							</div>
						</motion.div>

						{/* Right Content - FAQ */}
						<div className='space-y-8 px-4 md:px-0'>
							<motion.h2
								className='text-3xl md:text-4xl lg:text-5xl font-nosifer text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text drop-shadow-lg transform rotate-1'
								initial={{ opacity: 0, y: -30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, ease: 'easeOut' }}
								viewport={{ once: true }}
							>
								FAQ
							</motion.h2>
							<motion.div
								className='space-y-6'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								viewport={{ once: true }}
							>
								{[
									{
										q: 'What is $DINO?',
										a: 'A community-driven meme token built on Ethereum that combines fun with serious blockchain innovation. Join the dino family today!',
									},
									{
										q: 'Which blockchain?',
										a: 'DINO is built on Ethereum mainnet, leveraging the security and reliability of the most trusted blockchain network.',
									},
									{
										q: 'How to buy $DINO?',
										a: 'Connect your MetaMask wallet, choose ETH or USDT, enter your amount, and click Buy. You can also stake for additional rewards!',
									},
									{
										q: 'What are the tokenomics?',
										a: 'Total supply is distributed across presale, staking rewards, development, marketing, and community initiatives. Check our tokenomics section above.',
									},
									{
										q: 'Is there staking?',
										a: 'Yes! Stake your $DINO tokens and earn up to 913.17% APY rewards. The longer you stake, the more you earn!',
									},
								].map((f, i) => (
									<div
										key={i}
										className='faq-item bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl border-2 border-emerald-600 shadow-xl overflow-hidden'
									>
										<details className='group'>
											<summary className='cursor-pointer p-6 font-bold text-xl text-white hover:bg-white/10 transition-all duration-300 list-none flex justify-between items-center'>
												<span>{f.q}</span>
												<span className='transform group-open:rotate-180 transition-transform duration-500 text-2xl'>
													⚡
												</span>
											</summary>
											<div className='accordion-content px-6 pb-6 transition-all duration-500 ease-in-out max-h-0 group-open:max-h-96 overflow-hidden'>
												<div className='pt-4'>
													<p className='text-white leading-relaxed'>{f.a}</p>
												</div>
											</div>
										</details>
									</div>
								))}
							</motion.div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
