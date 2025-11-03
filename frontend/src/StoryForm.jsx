// src/StoryForm.jsx
import { useState } from 'react'

function StoryForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    location: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      alert('Story submitted successfully')
      setFormData({ title: '', content: '', location: '' })
    } catch (err) {
      alert('Error submitting story')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-8">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Story title"
        className="input input-bordered w-full"
        required
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Your story"
        className="textarea textarea-bordered w-full"
        required
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        className="input input-bordered w-full"
        required
      />
      <button type="submit" className="btn btn-primary w-full">
        Submit Story
      </button>
    </form>
  )
}

export default StoryForm
