import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Legal() {
	return (
		<div>
			<Header />
			<main className='max-w-3xl mx-auto px-4 py-16 space-y-8'>
				<h1 className='text-4xl font-extrabold'>Privacy Policy & Terms</h1>
				<p className='text-neutral-700'>
					This page will contain the full Privacy Policy and Terms of Service.
					Provide your copy and we will update it here.
				</p>
			</main>
			<Footer />
		</div>
	)
}
