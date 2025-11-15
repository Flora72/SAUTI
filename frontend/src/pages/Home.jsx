import heroImage from '../assets/hero.png'
import gallery1 from '../assets/gallery1.png'
import gallery2 from '../assets/gallery2.png'
import gallery3 from '../assets/gallery3.png'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />

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
              SAUTI is a safe space built for those who have carried pain in silence survivors of sexual abuse,
              gender-based violence, and anyone who has been shunned or unheard. Here, your story is honored,
              your voice is amplified, and your dignity is reclaimed.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-6 bg-base-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-primary">Your Story Matters</h2>
          <p className="text-base leading-relaxed">
            SAUTI is a safe space for survivors of sexual abuse, gender-based violence, and anyone who has felt unheard.
            This is where silence ends and healing begins.
          </p>
         <button className="btn btn-primary btn-wide">Share Your Story</button>
        </div>
      </section>


     

      {/* Image Gallery */}
      <section className="py-12 px-6 bg-base-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src={gallery1}
            className="rounded-lg shadow-md transition duration-300 hover:scale-105"
          />
          <img
            src={gallery2}
            className="rounded-lg shadow-md transition duration-300 hover:scale-105"
          />
          <img
            src={gallery3}
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
