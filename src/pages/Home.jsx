import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { FaBitcoin, FaEthereum } from 'react-icons/fa'
import { SiCardano, SiChainlink, SiDogecoin, SiSolana } from 'react-icons/si'
import { TbCurrencyDollar } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import dinoImg from '../assets/dino-img.png'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroLines from '../components/HeroLines'
import ProgressLine from '../components/ProgressLine'
import Button from '../components/UI/Button/Button'
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
				<section className='relative h-screen max-w-6xl mx-auto px-4 pt-16 grid md:grid-cols-2 gap-10 items-center'>
					<HeroLines />
					<div className='space-y-6'>
						<h1 className='text-[30px] font-nosifer leading-tight text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text'>
							WELCOME TO $DINO TOKEN PRESALE
						</h1>
						<img src={dinoImg} alt='' className='w-[450px] h-[350px]' />
						<p className='text-neutral-600 max-w-prose font-roboto'>
							Legendary meme vibes meet clean design. Jump in early and ride
							with the Dino family.
						</p>
						<div className='flex gap-3'>
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
					<div className='relative max-w-sm ml-auto'>
						{/* Floating dino characters behind calculator */}
						<div className='absolute inset-0 -z-10 overflow-hidden'>
							<motion.img
								src='/src/assets/dino-flying.png'
								alt='Flying Dino'
								className='absolute top-10 -left-8 w-8 h-8 object-contain opacity-60'
								animate={{ x: [0, 30, 0], y: [0, -20, 0], rotate: [0, 10, 0] }}
								transition={{
									repeat: Infinity,
									duration: 4,
									ease: 'easeInOut',
								}}
							/>
							<motion.img
								src='/src/assets/dino-standing.png'
								alt='Standing Dino'
								className='absolute top-20 -right-10 w-10 h-10 object-contain opacity-50'
								animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
								transition={{
									repeat: Infinity,
									duration: 3.5,
									ease: 'easeInOut',
									delay: 0.5,
								}}
							/>
							<motion.img
								src='/src/assets/dino-happy.png'
								alt='Happy Dino'
								className='absolute top-40 -left-6 w-6 h-6 object-contain opacity-40'
								animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
								transition={{
									repeat: Infinity,
									duration: 5,
									ease: 'easeInOut',
									delay: 1,
								}}
							/>
							<motion.img
								src='/src/assets/dino-running.png'
								alt='Running Dino'
								className='absolute bottom-20 -right-8 w-9 h-9 object-contain opacity-50'
								animate={{ x: [0, -15, 0], y: [0, 12, 0] }}
								transition={{
									repeat: Infinity,
									duration: 4.5,
									ease: 'easeInOut',
									delay: 1.5,
								}}
							/>
							<motion.img
								src='/src/assets/dino-cactus.png'
								alt='Dino with Cactus'
								className='absolute bottom-10 -left-4 w-7 h-7 object-contain opacity-30'
								animate={{ x: [0, 18, 0], y: [0, -8, 0] }}
								transition={{
									repeat: Infinity,
									duration: 3.8,
									ease: 'easeInOut',
									delay: 2,
								}}
							/>
						</div>

						<motion.div
							ref={dinoRef}
							className='absolute -top-8 left-1/2 -translate-x-1/2 z-10'
							animate={{ rotate: [0, 5, -5, 0], y: [0, -5, 0] }}
							transition={{ repeat: Infinity, duration: 2.5 }}
						>
							<img
								src='/src/assets/dino-standing.png'
								alt='Calculator Dino'
								className='w-16 h-16 object-contain'
								onLoad={() =>
									setDinosLoaded(prev => ({ ...prev, calculator: true }))
								}
								onError={() =>
									setDinosLoaded(prev => ({ ...prev, calculator: false }))
								}
							/>
							{/* Fallback */}
							{dinosLoaded.calculator === false && (
								<div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center'>
									<TbCurrencyDollar className='text-2xl text-white' />
								</div>
							)}
						</motion.div>
						<div
							id='presale'
							className='bg-white rounded-xl border border-black/10 p-4 pt-8 shadow-xl'
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
									<div className='w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center overflow-hidden'>
										<img
											src='/src/assets/dino-flying.png'
											alt='Mini Dino'
											className='w-6 h-6 object-contain'
											onError={e => {
												e.target.style.display = 'none'
												e.target.nextSibling.style.display = 'block'
											}}
										/>
										<TbCurrencyDollar className='text-lg text-white hidden' />
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
											⚡ ETH ▼
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
										<img
											src='/src/assets/dino-flying.png'
											alt='Dino Balance'
											className='w-5 h-5 object-contain'
											onError={e => {
												e.target.style.display = 'none'
												e.target.nextSibling.style.display = 'inline'
											}}
										/>
										<TbCurrencyDollar className='text-lg text-green-500 hidden' />
										<span className='text-neutral-900 text-sm font-bold'>
											0
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='h-screen relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-green-400'>
					<div className='absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-green-300/30'></div>

					{/* Floating elements */}
					<div className='absolute top-10 left-10 w-24 h-24 rounded-full bg-green-300/40 animate-pulse'></div>
					<div className='absolute bottom-20 right-10 w-16 h-16 rounded-full bg-yellow-300/40 animate-bounce'></div>
					<div className='absolute top-1/2 left-10 w-12 h-12 rounded-full bg-pink-300/50 animate-ping'></div>

					<div className='relative z-10 h-full max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center'>
						<div className='space-y-6'>
							<h2 className='text-4xl font-nosifer text-yellow-300 drop-shadow-lg'>
								About $DINO Family
							</h2>
							<p className='text-white text-lg font-roboto leading-relaxed'>
								$DINO is a playful tribute to internet culture with clean,
								confident visuals. Built for community and fun, combining meme
								culture with serious blockchain innovation.
							</p>
							<div className='flex gap-4'>
								<button className='bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg font-bold text-sm shadow-lg transform hover:scale-105 transition-all'>
									WHITEPAPER
								</button>
								<button className='bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg font-bold text-sm shadow-lg transform hover:scale-105 transition-all'>
									BUY NOW
								</button>
							</div>
						</div>

						{/* Features Grid with Center Character */}
						<div className='relative'>
							{/* Center Character */}
							<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
								<motion.div
									className='w-20 h-20 rounded-full bg-yellow-300 border-4 border-white shadow-lg grid place-items-center'
									animate={{ y: [0, -10, 0] }}
									transition={{
										repeat: Infinity,
										duration: 2,
										ease: 'easeInOut',
									}}
								>
									<img
										src='/src/assets/dino-running.png'
										alt='Running Dino Center'
										className='w-12 h-12 object-contain'
										onError={e => {
											e.target.style.display = 'none'
											e.target.nextSibling.style.display = 'block'
										}}
									/>
									<TbCurrencyDollar className='text-4xl text-green-600 hidden' />
								</motion.div>
							</div>

							{/* Feature Cards */}
							<div className='grid grid-cols-2 gap-4 relative z-10'>
								{[
									{
										icon: '⚡',
										title: 'BUILT ON ETHEREUM',
										desc: 'Harnesses the power of Ethereum technology to deliver faster, cheaper, and scalable blockchain solutions.',
									},
									{
										icon: '🔗',
										title: 'SEAMLESS INTEROPERABILITY',
										desc: 'Connects ecosystems with ease, allowing users to move assets quickly and securely across chains.',
									},
									{
										icon: '🏛️',
										title: 'COMMUNITY-DRIVEN VISION',
										desc: 'Empowering the community with decentralized governance, ensuring every voice shapes the future.',
									},
									{
										icon: '🚀',
										title: 'DOUBLE THE REWARDS',
										desc: 'Stake $DINO and earn enhanced rewards, powered by the efficiency of blockchain scalability.',
									},
								].map((feature, i) => (
									<div
										key={i}
										className='bg-teal-500 rounded-xl p-4 border-2 border-white shadow-lg transform hover:scale-105 transition-transform'
									>
										<div className='bg-pink-300 rounded-lg w-8 h-8 flex items-center justify-center mb-2 overflow-hidden'>
											<img
												src={`/src/assets/dino-${
													['flying', 'standing', 'happy', 'running'][i]
												}.png`}
												alt={`Feature Dino ${i + 1}`}
												className='w-6 h-6 object-contain'
												onError={e => {
													e.target.style.display = 'none'
													e.target.nextSibling.style.display = 'block'
												}}
											/>
											<div className='hidden'>
												{i === 0 && (
													<FaEthereum className='text-lg text-blue-600' />
												)}
												{i === 1 && (
													<SiChainlink className='text-lg text-blue-500' />
												)}
												{i === 2 && (
													<FaBitcoin className='text-lg text-orange-500' />
												)}
												{i === 3 && (
													<SiSolana className='text-lg text-purple-500' />
												)}
											</div>
										</div>
										<h3 className='text-yellow-300 font-bold text-xs mb-2'>
											{feature.title}
										</h3>
										<p className='text-white text-xs leading-tight'>
											{feature.desc}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<section
					id='how-to-buy'
					className='h-screen relative overflow-hidden bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500'
				>
					<div className='absolute inset-0 bg-gradient-to-br from-purple-400/30 via-blue-400/30 to-teal-400/30'></div>

					{/* Floating space elements */}
					<div className='absolute top-20 left-20 w-20 h-20 rounded-full bg-blue-200/30 animate-pulse'></div>
					<div className='absolute bottom-40 right-20 w-32 h-32 rounded-full bg-purple-200/20 animate-pulse delay-100'></div>
					<div className='absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-pink-200/40 animate-bounce'></div>

					<div className='relative z-10 h-full flex flex-col justify-center items-center px-4'>
						<h2 className='text-6xl font-nosifer text-center mb-12 text-yellow-300 drop-shadow-lg transform rotate-2'>
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

				<section className='h-screen relative overflow-hidden bg-gradient-to-br from-blue-600 via-teal-500 to-cyan-400'>
					<div className='absolute inset-0 bg-gradient-to-br from-blue-500/30 via-teal-400/30 to-cyan-300/30'></div>

					{/* Floating elements */}
					<div className='absolute top-20 right-20 w-16 h-16 rounded-full bg-pink-300/40 animate-bounce'></div>
					<div className='absolute bottom-40 left-20 w-24 h-24 rounded-full bg-yellow-300/40 animate-pulse'></div>

					<div className='relative z-10 h-full max-w-6xl mx-auto px-4 flex flex-col justify-center'>
						<div className='text-center mb-8'>
							<h2 className='text-6xl font-nosifer text-yellow-300 drop-shadow-lg transform -rotate-2 mb-4'>
								toKeNoMiCs
							</h2>
							{/* Center Character */}
							<div className='flex justify-center'>
								<div className='relative'>
									<div className='w-24 h-24 rounded-full bg-green-400 border-4 border-white shadow-lg grid place-items-center animate-bounce overflow-hidden'>
										<img
											src='/src/assets/dino-happy.png'
											alt='Tokenomics Center Dino'
											className='w-16 h-16 object-contain'
											onError={e => {
												e.target.style.display = 'none'
												e.target.nextSibling.style.display = 'block'
											}}
										/>
										<TbCurrencyDollar className='text-5xl text-white hidden' />
									</div>
									<div className='absolute -top-2 -right-2 w-6 h-6 bg-pink-300 rounded-full animate-ping'></div>
								</div>
							</div>
						</div>

						{/* Tokenomics Cards arranged around center */}
						<div className='relative'>
							{/* Distribution percentages around the character */}
							<div className='tokenomics-card absolute -top-20 left-1/4 transform -translate-x-1/2'>
								<div className='bg-teal-500 rounded-2xl p-4 border-4 border-white shadow-2xl'>
									<div className='bg-pink-300 rounded-lg px-2 py-1 text-xs font-bold text-gray-800 mb-2 inline-block'>
										30%
									</div>
									<h3 className='text-yellow-300 font-bold text-sm'>Presale</h3>
								</div>
							</div>

							<div className='tokenomics-card absolute -top-20 right-1/4 transform translate-x-1/2'>
								<div className='bg-teal-500 rounded-2xl p-4 border-4 border-white shadow-2xl'>
									<div className='bg-pink-300 rounded-lg px-2 py-1 text-xs font-bold text-gray-800 mb-2 inline-block'>
										10%
									</div>
									<h3 className='text-yellow-300 font-bold text-sm'>
										Exchange Listings
									</h3>
								</div>
							</div>

							<div className='tokenomics-card absolute left-0 top-1/2 transform -translate-y-1/2'>
								<div className='bg-teal-500 rounded-2xl p-4 border-4 border-white shadow-2xl'>
									<div className='bg-pink-300 rounded-lg px-2 py-1 text-xs font-bold text-gray-800 mb-2 inline-block'>
										25%
									</div>
									<h3 className='text-yellow-300 font-bold text-sm'>
										Staking Rewards
									</h3>
								</div>
							</div>

							<div className='tokenomics-card absolute right-0 top-1/2 transform -translate-y-1/2'>
								<div className='bg-teal-500 rounded-2xl p-4 border-4 border-white shadow-2xl'>
									<div className='bg-pink-300 rounded-lg px-2 py-1 text-xs font-bold text-gray-800 mb-2 inline-block'>
										8%
									</div>
									<h3 className='text-yellow-300 font-bold text-sm'>
										Marketing
									</h3>
								</div>
							</div>

							<div className='tokenomics-card absolute bottom-0 left-1/3 transform -translate-x-1/2'>
								<div className='bg-teal-500 rounded-2xl p-4 border-4 border-white shadow-2xl'>
									<div className='bg-pink-300 rounded-lg px-2 py-1 text-xs font-bold text-gray-800 mb-2 inline-block'>
										15%
									</div>
									<h3 className='text-yellow-300 font-bold text-sm'>
										Ecosystem Development
									</h3>
								</div>
							</div>

							<div className='tokenomics-card absolute bottom-0 right-1/3 transform translate-x-1/2'>
								<div className='bg-teal-500 rounded-2xl p-4 border-4 border-white shadow-2xl'>
									<div className='bg-pink-300 rounded-lg px-2 py-1 text-xs font-bold text-gray-800 mb-2 inline-block'>
										2.5%
									</div>
									<h3 className='text-yellow-300 font-bold text-sm'>Team</h3>
								</div>
							</div>

							<div className='tokenomics-card absolute -bottom-10 left-1/2 transform -translate-x-1/2'>
								<div className='bg-teal-500 rounded-2xl p-4 border-4 border-white shadow-2xl'>
									<div className='bg-pink-300 rounded-lg px-2 py-1 text-xs font-bold text-gray-800 mb-2 inline-block'>
										1%
									</div>
									<h3 className='text-yellow-300 font-bold text-sm'>
										Charity/Impact
									</h3>
								</div>
							</div>

							<div className='tokenomics-card absolute -bottom-20 left-20'>
								<div className='bg-teal-500 rounded-2xl p-4 border-4 border-white shadow-2xl'>
									<div className='bg-pink-300 rounded-lg px-2 py-1 text-xs font-bold text-gray-800 mb-2 inline-block'>
										3.5%
									</div>
									<h3 className='text-yellow-300 font-bold text-sm'>
										Community Rewards
									</h3>
								</div>
							</div>

							<div className='tokenomics-card absolute -bottom-20 right-20'>
								<div className='bg-teal-500 rounded-2xl p-4 border-4 border-white shadow-2xl'>
									<div className='bg-pink-300 rounded-lg px-2 py-1 text-xs font-bold text-gray-800 mb-2 inline-block'>
										5%
									</div>
									<h3 className='text-yellow-300 font-bold text-sm'>
										Foundation/Reserve
									</h3>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='h-screen relative overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400'>
					<div className='absolute inset-0 bg-gradient-to-br from-yellow-300/30 via-orange-300/30 to-red-300/30'></div>
					<div className='relative z-10 h-full flex flex-col justify-center items-center px-4'>
						<h2 className='text-6xl font-nosifer text-center mb-12 text-green-400 drop-shadow-lg transform -rotate-3'>
							RoadMap
						</h2>

						{/* Center Character */}
						<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20'>
							<div className='relative'>
								<div className='w-32 h-32 rounded-full bg-green-400 border-4 border-white shadow-lg grid place-items-center animate-pulse overflow-hidden'>
									<img
										src='/src/assets/dino-standing.png'
										alt='Roadmap Center Dino'
										className='w-20 h-20 object-contain'
										onError={e => {
											e.target.style.display = 'none'
											e.target.nextSibling.style.display = 'block'
										}}
									/>
									<TbCurrencyDollar className='text-6xl text-white hidden' />
								</div>
								<div className='absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full animate-bounce'></div>
								<div className='absolute -bottom-2 -left-2 w-6 h-6 bg-pink-300 rounded-full animate-bounce delay-100'></div>
							</div>
						</div>

						{/* Phase Cards */}
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl w-full relative z-10'>
							{/* Phase 1 */}
							<div className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl transform hover:scale-105 transition-transform'>
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
							</div>

							{/* Phase 2 */}
							<div className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl transform hover:scale-105 transition-transform'>
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
							</div>

							{/* Phase 3 */}
							<div className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl transform hover:scale-105 transition-transform'>
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
							</div>

							{/* Phase 4 */}
							<div className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl transform hover:scale-105 transition-transform'>
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
							</div>

							{/* Phase 5 */}
							<div className='bg-teal-500 rounded-2xl p-6 border-4 border-white shadow-2xl transform hover:scale-105 transition-transform'>
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
							</div>
						</div>

						{/* Floating characters */}
						<div className='absolute bottom-20 left-20 animate-bounce'>
							<div className='w-16 h-16 rounded-full bg-pink-400 grid place-items-center overflow-hidden'>
								<img
									src='/src/assets/dino-cactus.png'
									alt='Dino with Cactus'
									className='w-12 h-12 object-contain'
									onError={e => {
										e.target.style.display = 'none'
										e.target.nextSibling.style.display = 'block'
									}}
								/>
								<SiCardano className='text-white text-2xl hidden' />
							</div>
						</div>
						<div className='absolute top-20 right-20 animate-bounce delay-150'>
							<div className='w-12 h-12 rounded-full bg-yellow-400 grid place-items-center overflow-hidden'>
								<img
									src='/src/assets/dino-desert.png'
									alt='Desert Dino'
									className='w-10 h-10 object-contain'
									onError={e => {
										e.target.style.display = 'none'
										e.target.nextSibling.style.display = 'block'
									}}
								/>
								<FaBitcoin className='text-orange-600 text-xl hidden' />
							</div>
						</div>
					</div>
				</section>

				<section
					id='faq'
					className='h-screen relative overflow-hidden bg-[#fff]'
				>
					<div className='relative z-20 h-full max-w-6xl mx-auto px-4 flex flex-col justify-center'>
						<h2 className='text-6xl font-nosifer mb-12 text-center text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text drop-shadow-lg transform rotate-1'>
							FAQ
						</h2>
						<div className='space-y-6 max-w-4xl mx-auto'>
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
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
