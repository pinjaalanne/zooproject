import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { animals } from './animalsList.js'

function App() {
  const [animalsList, setAnimalsList] = useState(animals);

  function removeHandler(name) {
    const updatedArray = animalsList.filter(animal => animal.name !== name);
    setAnimalsList(updatedArray);
  }

  return (
    <>
      <Header logo="The Zoo Project" />
      <main>
        <div className="cards">
          {animalsList.map((animal) => (
            <Card key={animal.name}
              {...animal}
              click={() => removeHandler(animal.name)} />))}
        </div>
      </main >
      <Footer copyright="Copyright 2023" />
    </>
  )
}

export default App
