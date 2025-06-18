import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './index.css'
// Lazy loading para melhor performance
const Home = lazy(() => import('./pages/home/home'))
const About = lazy(() => import('./pages/about/about'))
const Contact = lazy(() => import('./pages/contact/contact'))
const Documentation = lazy(() => import('./pages/documentation/Documentation'))
// const Commands = lazy(() => import('./pages/commands/Commands'))
const Dashboard = lazy(() => import('./pages/dashboard/dashboard'))
const Premium = lazy(() => import('./pages/premium/premium'))
const Support = lazy(() => import('./pages/support/support'))

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner fullScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/docs" element={<Documentation />} />
            {/* <Route path="/commands" element={<Commands />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/support" element={<Support />} />
            {/* Rota de fallback para 404 */}
            <Route path="*" element={<div className="text-center mt-20">Página não encontrada</div>} />
          </Routes>
        </Suspense>
      </main>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App