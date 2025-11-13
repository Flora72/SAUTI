import React from 'react'
import StoryForm from '../components/StoryForm'
import Navbar from '../components/Navbar'

export default function ShareStory() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-6">
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
            Share Your Story
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            SAUTI is more than a portal it’s a heartbeat. Here, your voice becomes part of a chorus
            of resilience, joy, and transformation. Every word you write is a spark that lights the
            path for others.
          </p>
        </div>
      </section>



      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-secondary">Your Voice Matters</h2>
            <p className="text-base leading-relaxed text-base-content/80">
              Whether it’s a triumph, a challenge, or a call to change your story will inspire
              someone, somewhere. Write with courage. Share with love.
            </p>
          </div>

          {/* Story Form */}
          <div className="animate-slide-up">
            <StoryForm />
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="bg-base-300 py-12 px-6 text-center">
        <blockquote className="text-xl italic font-semibold text-primary max-w-2xl mx-auto">
          “When we tell our stories, we heal. When we listen, we connect. When we share, we transform.”
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-6 bg-base-100 text-base-content">
        <p>© 2025 SAUTI. Built with love and community.</p>
      </footer>
    </div>
  )
}
