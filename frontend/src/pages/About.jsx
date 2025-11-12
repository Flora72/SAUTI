import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Navbar />

      <div className="px-6 py-12 max-w-4xl mx-auto space-y-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-primary text-center">About SAUTI</h1>

        {/* Mission Statement */}
        <p className="text-lg leading-relaxed text-center">
          SAUTI means <span>voice</span> in Kiswahili. 
          This platform is built to honor and elevate the voices of everyday Kenyans from 
          survivors and students to farmers and elders. Through storytelling, we reclaim 
          dignity, build empathy, and spark change.
        </p>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-base-200 p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
            <h2 className="text-xl font-bold text-secondary mb-2">Healing</h2>
            <p className="text-base leading-relaxed">
              We hold space for pain, joy, and truth. Every story is a step toward healing.
            </p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
            <h2 className="text-xl font-bold text-secondary mb-2">Voice</h2>
            <p className="text-base leading-relaxed">
              We amplify lived experience raw, real, and rooted in Kenyan life.
            </p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg shadow-md hover:scale-105 transition duration-300">
            <h2 className="text-xl font-bold text-secondary mb-2">Community</h2>
            <p className="text-base leading-relaxed">
              Stories connect us. SAUTI is built by and for the people it serves.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-base-300" />

        {/* Founder's Note */}
        <div className="bg-base-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-4">A Note from the Founder</h2>
          <p className="text-base leading-relaxed">
             I built SAUTI because for the longest time, I looked to be listened to but no one did. 
              I have lived with the pain of silence, of being shunned, of carrying stories that felt too heavy 
              to hold alone. SAUTI is my answer: a space where voices like mine, and voices like yours, 
              are honored. Here, we are not invisible. Here, we are heard.
              </p>

       
          <p className="mt-4 text-sm italic text-right">~ Florence Ndinda</p>
        </div>
      </div>
    </div>
  )
}
