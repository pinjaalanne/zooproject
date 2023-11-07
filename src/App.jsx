import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './animalsList.js'

function App() {
  const [animals, setAnimals] = useState([
    { name: '', likes: 0 }]);

  return (
    <>
      <Header logo="The Zoo Project" />
      <main>
        <div className="cards">
          {animals.map((animal, i) => (
            <Card key={i} name={animal.name} likes={animal.likes} />))}
        </div>
      </main >
      <Footer copyright="Copyright 2023" />
    </>
  )
}

export default App
