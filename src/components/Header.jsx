import { useEffect, useState } from 'react'
import { FaTelegram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useWalletStore } from '../store/wallet'

export default function Header() {
	const { isConnected, address, connectMetaMask } = useWalletStore()
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [isDarkHeader, setIsDarkHeader] = useState(false)
	const [dinoLoaded, setDinoLoaded] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const footer = document.querySelector('footer')
			if (footer) {
				const footerRect = footer.getBoundingClientRect()
				const headerHeight = 80 // Approximate header height
				// When footer is within viewport height from top
				setIsDarkHeader(footerRect.top <= window.innerHeight + headerHeight)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={`fixed top-[20px] left-0 right-0 max-[768px]:left-[10px] max-[768px]:right-[10px] max-w-6xl mx-auto z-50 transition-all duration-500 border-2 rounded-[20px] ${
				isDarkHeader
					? 'bg-black/90 backdrop-blur-md border-white/20'
					: 'bg-white/80 backdrop-blur-md border-black/100'
			}`}
			style={
				isDarkHeader
					? { boxShadow: '6px 6px 1px #88D2C1' }
					: { boxShadow: '0px 0px 1px #fff' }
			}
		>
			<div className='max-w-6xl mx-auto px-4 h-16 flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<Link
						to='/'
						className='font-nosifer text-xl text-transparent bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text'
					>
						$DINO
					</Link>
				</div>

				<nav
					className={`hidden md:flex items-center gap-6 transition-colors duration-500 ${
						isDarkHeader ? 'text-white' : 'text-neutral-700'
					}`}
				>
					<Link to='/' className='hover:text-cyan-400 transition-colors'>
						HOME
					</Link>
					<a
						href='#how-to-buy'
						className='hover:text-cyan-400 transition-colors'
					>
						HOW TO BUY
					</a>
					<Link
						to='/whitepaper'
						className='hover:text-cyan-400 transition-colors'
					>
						WHITE PAPER
					</Link>
					<a href='#faq' className='hover:text-cyan-400 transition-colors'>
						FAQ
					</a>
				</nav>

				<div className='flex items-center gap-4'>
					<div
						className={`hidden md:flex items-center gap-3 transition-colors duration-500 ${
							isDarkHeader ? 'text-white' : 'text-neutral-700'
						}`}
					>
						<a
							href='https://twitter.com'
							className='hover:text-cyan-400 transition-colors text-xl'
						>
							<FaTwitter />
						</a>
						<a
							href='https://t.me'
							className='hover:text-cyan-400 transition-colors text-xl'
						>
							<FaTelegram />
						</a>
					</div>
					<button
						onClick={connectMetaMask}
						className='px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all'
						style={
							isDarkHeader
								? { boxShadow: '3px 3px 1px #88D2C1' }
								: { boxShadow: '0px 0px 0px #000' }
						}
					>
						{isConnected
							? `${address?.slice(0, 6)}...${address?.slice(-4)}`
							: 'Connect Wallet'}
					</button>
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className={`md:hidden p-2 rounded transition-colors duration-500 ${
							isDarkHeader ? 'text-white' : 'text-neutral-700'
						}`}
					>
						☰
					</button>
				</div>
			</div>

			{mobileMenuOpen && (
				<div
					className={`md:hidden border-t transition-all duration-500 ${
						isDarkHeader ? 'border-white/20 bg-black/90' : 'border-black/10'
					}`}
				>
					<nav
						className={`px-4 py-4 space-y-2 transition-colors duration-500 ${
							isDarkHeader ? 'text-white' : 'text-neutral-700'
						}`}
					>
						<Link
							to='/'
							className='block py-2 hover:text-cyan-400 transition-colors'
						>
							HOME
						</Link>
						<a
							href='#how-to-buy'
							className='block py-2 hover:text-cyan-400 transition-colors'
						>
							HOW TO BUY
						</a>
						<Link
							to='/whitepaper'
							className='block py-2 hover:text-cyan-400 transition-colors'
						>
							WHITE PAPER
						</Link>
						<a
							href='#faq'
							className='block py-2 hover:text-cyan-400 transition-colors'
						>
							FAQ
						</a>
					</nav>
				</div>
			)}
		</header>
	)
}
