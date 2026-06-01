import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState(null)
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  useEffect(() => {
    async function JokesApi() {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/randomjokes"
      )
    

      const data = await response.json()

      const randomIndex = Math.floor(
        Math.random() * data.data.data.length
      )

      setJoke(data.data.data[randomIndex])
    }

    JokesApi()
  }, [count])

  return (
    <div>
      <h1>Random Joke</h1>

      <div>
        <p>{joke?.content}</p>
      </div>

      <button
        onClick={increment}
      >
        Get New Joke
      </button>
    </div>
  )
}

export default App