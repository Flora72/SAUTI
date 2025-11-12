import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ShareStory from './pages/ShareStory.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/share" element={<ShareStory />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
