import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout'
import { About, Home, Pricing, NotFound } from './pages'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App