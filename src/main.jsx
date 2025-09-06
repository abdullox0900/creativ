import AOS from 'aos'
import 'aos/dist/aos.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
)

// Initialize AOS after mount
setTimeout(() => {
	AOS.init({ duration: 700, easing: 'ease-out-quad', once: false })
}, 0)
