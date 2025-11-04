export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-md px-6">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">SAUTI</a>
        </div>
        <div className="flex-none space-x-2">
          <a className="btn btn-sm btn-outline">Home</a>
          <a className="btn btn-sm btn-outline">Share Story</a>
          <a className="btn btn-sm btn-outline">About</a>
          <a className="btn btn-sm btn-outline">Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-base-300 mt-6 px-6">
        <div className="hero-content flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          <img
            src="https://cvnkenya.org/wp-content/uploads/2024/01/Copy-of-DSC_0709-scaled.jpg"
            className="max-w-sm rounded-lg shadow-2xl transition duration-300 hover:scale-105"
            alt="Community storytelling in Kenya"
          />
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-primary leading-tight">Welcome to SAUTI</h1>
            <p className="text-lg leading-relaxed">
              SAUTI is a community-powered storytelling portal amplifying real voices from Kenya.
              We believe in the power of lived experience to shape policy, culture, and connection.
            </p>
            <button className="btn btn-primary btn-wide">Share Your Story</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 bg-base-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-secondary">Why SAUTI?</h2>
          <p className="text-base leading-relaxed">
            SAUTI means "voice" in Kiswahili. This platform is built to honor and elevate the voices
            of everyday Kenyans—from farmers and students to activists and elders. Through stories,
            we build resilience, empathy, and action.
          </p>
          <p className="text-base leading-relaxed">
            Whether you're sharing a moment of joy, a challenge overcome, or a call to change, your
            voice matters here.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-6 bg-base-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="https://cvnkenya.org/wp-content/uploads/2024/06/DSC_2890-1024x683.jpg"
            alt="Youth storytelling"
            className="rounded-lg shadow-md transition duration-300 hover:scale-105"
          />
          <img
            src="https://childsplayintl.org/wp-content/uploads/2023/07/0FF211A0-C588-4AEE-B6C4-0CB54F9D6827_1_201_a.jpeg"
            alt="Drama workshop"
            className="rounded-lg shadow-md transition duration-300 hover:scale-105"
          />
          <img
            src="https://nightingaledvs.com/wp-content/uploads/2023/05/fellowship-group-pic-scaled.jpeg"
            alt="Female journalists in Kenya"
            className="rounded-lg shadow-md transition duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-6 bg-base-100 text-base-content">
        <p>© 2025 SAUTI. Built with love and community.</p>
      </footer>
    </div>
  )
}
