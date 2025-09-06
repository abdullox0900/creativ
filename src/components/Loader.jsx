import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { TbCurrencyDollar } from 'react-icons/tb'

export default function Loader() {
	const pathRef = useRef(null)
	const coinRef = useRef(null)
	const dinoRef = useRef(null)
	const [dinoLoaded, setDinoLoaded] = useState(false)

	useEffect(() => {
		const tl = gsap.timeline({ repeat: -1 })
		twirlLine(pathRef.current)

		// Animate dino or fallback coin
		if (dinoRef.current && dinoLoaded) {
			// Animate dino face spinning and floating
			tl.to(dinoRef.current, {
				rotation: 360,
				duration: 3,
				ease: 'linear',
			})
			gsap.to(dinoRef.current, {
				y: '+=15',
				duration: 1.5,
				ease: 'sine.inOut',
				repeat: -1,
				yoyo: true,
			})
		} else if (coinRef.current) {
			// Fallback coin animation
			tl.to(coinRef.current, { rotate: 360, duration: 2, ease: 'power2.inOut' })
		}

		return () => tl.kill()
	}, [dinoLoaded])

	return (
		<div className='min-h-screen grid place-items-center bg-gradient-to-br from-cyan-50 to-emerald-50'>
			<div className='flex flex-col items-center gap-6'>
				<div className='relative'>
					<svg width='140' height='140' viewBox='0 0 140 140' fill='none'>
						<defs>
							<linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
								<stop offset='0%' stopColor='#ef4444' />
								<stop offset='100%' stopColor='#10b981' />
							</linearGradient>
						</defs>
						<circle cx='70' cy='70' r='62' stroke='#e5e7eb' strokeWidth='8' />
						<path
							ref={pathRef}
							d='M20,90 C45,30 95,30 120,90'
							stroke='url(#g)'
							strokeWidth='8'
							strokeLinecap='round'
						/>
					</svg>

					{/* Dino Image */}
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
						<img
							ref={dinoRef}
							src='/src/assets/dino-flying.png'
							alt='Loading Dino'
							className='w-20 h-20 object-contain drop-shadow-lg'
							onLoad={() => setDinoLoaded(true)}
							onError={() => setDinoLoaded(false)}
							style={{ display: dinoLoaded ? 'block' : 'none' }}
						/>
						{/* Fallback icon if image doesn't load */}
						{!dinoLoaded && (
							<div
								ref={coinRef}
								className='w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg'
							>
								<TbCurrencyDollar className='text-3xl text-white' />
							</div>
						)}
					</div>
				</div>
				<div className='text-center space-y-2'>
					<p className='font-nosifer text-2xl text-transparent bg-gradient-to-r from-rose-500 to-emerald-500 bg-clip-text animate-pulse'>
						Loading DINO…
					</p>
					<div className='flex justify-center gap-2'>
						<div className='w-2 h-2 bg-green-500 rounded-full animate-bounce'></div>
						<div className='w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100'></div>
						<div className='w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

function twirlLine(path) {
	if (!path) return
	const length = path.getTotalLength()
	gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
	gsap.to(path, {
		strokeDashoffset: 0,
		duration: 2,
		ease: 'power2.inOut',
		repeat: -1,
		yoyo: true,
	})
}
