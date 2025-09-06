import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Whitepaper() {
	return (
		<div>
			<Header />
			<main className='max-w-5xl mx-auto px-4 py-12'>
				<div className='rounded-xl border bg-white/70 p-6'>
					<h1 className='text-3xl font-extrabold mb-4'>Whitepaper</h1>
					<p className='text-neutral-700 mb-4'>
						Upload your PDF and set its URL below. The document will open inside
						an iframe.
					</p>
					<div className='aspect-[16/9] w-full rounded-lg overflow-hidden border bg-neutral-50'>
						<iframe
							title='whitepaper'
							className='w-full h-full'
							src='/whitepaper.pdf'
						></iframe>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}
