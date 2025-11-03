import StoryForm from './StoryForm.jsx'
import StoryList from './StoryList.jsx'

function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Sauti Story Portal</h1>
      <StoryForm />
      <StoryList />
    </div>
  )
}

export default App
