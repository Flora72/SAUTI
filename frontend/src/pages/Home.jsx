import heroImage from '../assets/hero.png';

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
          <div className="relative">
            <img src={heroImage} className="rounded-lg shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-base-300 via-transparent to-transparent"></div>
          </div>


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
    {/* Image 3 – Trauma to Triumph */}
    <img
      src="https://static.globalissues.org/ips/2024/07/FGM.png"
      alt="Kenyan woman reflecting after surviving trauma"
      className="rounded-lg shadow-md transition duration-300 hover:scale-105"
    />

    {/* Image 11 – Hamsa Healing Space */}
    <img
      src="https://hamsahealingspace.com/wp-content/uploads/2024/08/Female-Survivors-of-Sexual-Trauma-Online-Support-Group-at-Hamsa-Healing-Space.png"
      alt="Kenyan women in a trauma-informed support group"
      className="rounded-lg shadow-md transition duration-300 hover:scale-105"
    />

    {/* Image 19 – Nairobi Sisterhood */}
    <img
      src="https://www.myeyestokyo.com/wp-content/uploads/2018/12/1031px-Kenyan_Women_in_Nairobi_01.jpg"
      alt="Kenyan women standing together in Nairobi"
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
