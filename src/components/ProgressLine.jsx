import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

export default function ProgressLine() {
	const lineRef = useRef(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		const line = lineRef.current
		if (!line) return

		const length = line.getTotalLength()
		gsap.set(line, { strokeDasharray: length, strokeDashoffset: length })

		gsap.to(line, {
			strokeDashoffset: 0,
			ease: 'none',
			scrollTrigger: {
				trigger: 'body',
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			},
		})
	}, [])

	return (
		<div className='fixed left-8 top-0 h-full z-40 pointer-events-none'>
			<svg width='4' height='100%' className='h-full'>
				<defs>
					<linearGradient id='progressGradient' x1='0' x2='0' y1='0' y2='1'>
						<stop offset='0%' stopColor='#ec4899' />
						<stop offset='50%' stopColor='#8b5cf6' />
						<stop offset='100%' stopColor='#10b981' />
					</linearGradient>
				</defs>
				<line
					ref={lineRef}
					x1='2'
					y1='0'
					x2='2'
					y2='100%'
					stroke='url(#progressGradient)'
					strokeWidth='4'
					strokeLinecap='round'
				/>
			</svg>
		</div>
	)
}
