// src/StoryList.jsx
import { useEffect, useState } from 'react'

function StoryList() {
  const [stories, setStories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/stories')
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch(() => alert('Failed to load stories'))
  }, [])

  return (
    <div className="mt-8 space-y-4 max-w-2xl mx-auto">
      {stories.map((story) => (
        <div key={story._id} className="card bg-base-100 shadow-md p-4">
          <h2 className="text-lg font-bold">{story.title}</h2>
          <p>{story.content}</p>
          <p className="text-sm text-gray-500">Location: {story.location}</p>
        </div>
      ))}
    </div>
  )
}

export default StoryList
