import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './index.css'

// Lazy loading para melhor performance
const Home = lazy(() => import('./pages/home/home'))
const About = lazy(() => import('./pages/about/about'))
// const Commands = lazy(() => import('./pages/commands/Commands'))
// const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner fullScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/commands" element={<Commands />} />
            <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App