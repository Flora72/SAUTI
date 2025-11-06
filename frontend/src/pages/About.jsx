import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-primary text-center">About SAUTI</h1>

        {/* Mission Statement */}
        <p className="text-lg leading-relaxed text-center">
          SAUTI means <span className="italic font-semibold">“voice”</span> in Kiswahili. This platform is built to honor and elevate the voices of everyday Kenyans—from survivors and students to farmers and elders. Through storytelling, we reclaim dignity, build empathy, and spark change.
        </p>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-base-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-secondary mb-2">🧡 Healing</h2>
            <p className="text-base leading-relaxed">We hold space for pain, joy, and truth. Every story is a step toward healing.</p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-secondary mb-2">📣 Voice</h2>
            <p className="text-base leading-relaxed">We amplify lived experience—raw, real, and rooted in Kenyan life.</p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-secondary mb-2">🤝 Community</h2>
            <p className="text-base leading-relaxed">Stories connect us. SAUTI is built by and for the people it serves.</p>
          </div>
        </div>

        {/* Founder's Note */}
        <div className="bg-base-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">A Note from the Founder</h2>
          <p className="text-base leading-relaxed">
            “SAUTI was born from a deep need to listen—to truly hear the voices that are often silenced. As a builder, mentor, and Kenyan woman, I believe in the power of storytelling to heal, to connect, and to transform. This is our space. Our stories. Our future.”
          </p>
          <p className="mt-4 text-sm italic text-right">— Florence Ndinda</p>
        </div>
      </div>
    </div>
  )
}
