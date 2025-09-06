import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Loader from './components/Loader'

const Home = lazy(() => import('./pages/Home'))
const Legal = lazy(() => import('./pages/Legal'))
const Whitepaper = lazy(() => import('./pages/Whitepaper'))

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/legal' element={<Legal />} />
						<Route path='/whitepaper' element={<Whitepaper />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
