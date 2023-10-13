import { useEffect, useState } from 'react'
import {searchRepositories} from './utils/Github'
import './App.css'

function App() {
  interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    // Add other properties if needed
  }
  
  const [Repo, setRepo] = useState<Repository[]>([])

  
  useEffect( () => {
  const handle =  async () => {
    try {
      
      const repositories =    await searchRepositories('', 'flutter', '');
      setRepo(repositories);
      console.log(repositories)
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  }

  handle()
  }, [])
  return (
    
    <>
    {Repo.map(repository => (
  <div key={repository.id}>
    <h2>{repository.name}</h2>
    <p>{repository.description}</p>
    <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
      View Repository
    </a>
  </div>
))}
    </>
  )
}

export default App
