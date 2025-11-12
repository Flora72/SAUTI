// src/components/StoryForm.jsx
export default function StoryForm() {
  return (
    <div className="card bg-base-100 shadow-xl p-8 space-y-6 rounded-xl border border-base-300 hover:shadow-2xl transition duration-300">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-base-content/80 text-lg font-bold">Your voice matters. Share it here.</h2>
      </div>

      {/* Story Title */}
      <label className="form-control w-full">
        <span className="label-text font-semibold text-base-content">Story Title</span>
        <input
          type="text"
          placeholder="Enter a title"
          className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </label>

      {/* Story Content */}
      <label className="form-control w-full">
        <span className="label-text font-semibold text-base-content">Your Story</span>
        <textarea
          placeholder="Write your story here..."
          className="textarea textarea-bordered h-40 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
        />
      </label>

      {/* Location */}
      <label className="form-control w-full">
        <span className="label-text font-semibold text-base-content">Location</span>
        <input
          type="text"
          placeholder="Where did this happen?"
          className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </label>

      {/* Submit Button */}
      <div className="text-center">
        <button className="btn btn-primary btn-wide mt-6 hover:scale-105 transition-transform duration-300">
          Submit Story
        </button>
      </div>
    </div>
  )
}
