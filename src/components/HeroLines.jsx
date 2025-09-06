import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

export default function HeroLines() {
	const ref = useRef(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)
		const path = ref.current
		if (!path) return
		const length = path.getTotalLength()
		gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
		gsap.to(path, {
			strokeDashoffset: 0,
			ease: 'none',
			scrollTrigger: {
				trigger: path,
				start: 'top 50%',
				end: 'bottom top',
				scrub: true,
			},
		})
	}, [])

	return (
		<svg
			className='absolute inset-0 -z-10 pointer-events-none overflow-visible'
			width='100%'
			height='100%'
			viewBox='0 0 600 300'
			preserveAspectRatio='none'
		>
			<path
				ref={ref}
				d='M-50,250 C150,150 300,350 650,180'
				fill='none'
				stroke='#88D2C1'
				strokeOpacity='0.3'
				strokeWidth='3'
			/>
		</svg>
	)
}
