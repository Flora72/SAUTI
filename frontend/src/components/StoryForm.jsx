// src/components/StoryForm.jsx
export default function StoryForm() {
  return (
    <div className="card bg-base-100 shadow-xl p-6 space-y-4">
      <h2 className="card-title text-primary text-2xl">Sauti Story Portal</h2>
      <p className="text-base-content">Share Your Story</p>

      <label className="form-control">
        <span className="label-text">Story Title</span>
        <input type="text" placeholder="Enter a title" className="input input-bordered" />
      </label>

      <label className="form-control">
        <span className="label-text">Your Story</span>
        <textarea placeholder="Write your story here..." className="textarea textarea-bordered h-32" />
      </label>

      <label className="form-control">
        <span className="label-text">Location</span>
        <input type="text" placeholder="Where did this happen?" className="input input-bordered" />
      </label>

      <button className="btn btn-primary mt-4">Submit Story</button>
    </div>
  )
}