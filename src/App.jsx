import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { animals } from './animalsList.js'

function App() {
  const [animalsList, setAnimalsList] = useState(animals);

  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  function removeHandler(name) {
    const updatedArray = animalsList.filter(animal => animal.name !== name);
    setAnimalsList(updatedArray);
  }

  // const [allLikes, setAllLikes] = useState(0);

  const likeHandler = (name, action) => {
    const updatedArray = animalsList.map((animal) => {
      if (animal.name === name) {
        if (action === 'add') {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return { ...animal, likes: animal.likes - 1 };
        }
      } else {
        return animal;
      }
    });
    setAnimalsList(updatedArray);
  };

  return (
    <>
      <Header logo="The Zoo Project" />
      <main>
        <input className="search" id="search" type="text"
          placeholder="Search" onChange={handleChange}></input>
        <div className="cards">
          {animalsList
            .filter((animal) =>
              animal.name
                .toLowerCase()
                .includes(searchInput.toLowerCase()))
            .map((animal) => (
              <Card key={animal.name}
                {...animal}
                click={() => removeHandler(animal.name)}
                addLike={() => likeHandler(animal.name, 'add')}
                removeLike={() => likeHandler(animal.name, 'remove')}
              />))}
        </div>
      </main >
      <Footer copyright="Copyright 2023" />
    </>
  )
}

export default App