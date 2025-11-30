import React from 'react'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />

      <div className="px-6 py-12 max-w-3xl mx-auto space-y-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-primary text-center">Contact SAUTI</h1>
        <p className="text-lg leading-relaxed text-center">
          We'd love to hear from you. Whether you're sharing feedback, asking questions, or exploring partnerships
          your voice matters here.
        </p>

        {/* Contact Form */}
        <form className="space-y-6 bg-base-200 p-8 rounded-lg shadow-md">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Penny Peters"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="penny@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Your Message</span>
            </label>
            <textarea
              placeholder="Write your message here..."
              className="textarea textarea-bordered w-full h-32"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-wide">
              Send Message
            </button>
          </div>
        </form>

        {/* Note */}
        <p className="text-sm text-center italic text-base-content/70">Thank you for reaching out. We’ll get back to you as soon as we can.
        </p>
      </div>
    </div>
  )
}
