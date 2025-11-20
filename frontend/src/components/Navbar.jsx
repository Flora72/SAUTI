import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">SAUTI</Link>
      </div>
      <div className="flex-none space-x-2">
        <Link to="/" className="btn btn-sm btn-outline">Home</Link>
        <Link to="/share" className="btn btn-sm btn-outline">Share Story</Link>
        <Link to="/about" className="btn btn-sm btn-outline">About</Link>
        <Link to="/contact" className="btn btn-sm btn-outline">Contact</Link>
        <Link to="/signup" className="btn btn-sm btn-outline">Sign Up</Link>
        <Link to="/login" className="btn btn-sm btn-outline">Login</Link>
      </div>
    </div>
  )
}
