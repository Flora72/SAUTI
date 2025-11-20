import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ShareStory from './pages/ShareStory.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import SignUp from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/share" element={<ShareStory />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
