import { useState } from 'react'
import './App.css'
import { animals, birds } from './animalsList.js'
import Home from './routes/Home.jsx';
import Animals from './routes/Animals.jsx';
import Birds from './routes/Birds.jsx';
import About from './routes/About.jsx';
import ErrorPage from './routes/ErrorPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root'

function App() {
  const [animalsList, setAnimalsList] = useState(animals);

  const [birdsList, setBirdsList] = useState(birds);

  const [searchInput, setSearchInput] = useState('');

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  function removeHandler(name) {
    const updatedArray = animalsList.filter(animal => animal.name !== name);
    setAnimalsList(updatedArray);
  }

  function removeBirdHandler(name) {
    const updatedArray = birdsList.filter(bird => bird.name !== name);
    setBirdsList(updatedArray);
  }

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

  const likeBirdHandler = (name, action) => {
    const updatedArray = birdsList.map((bird) => {
      if (bird.name === name) {
        if (action === 'add') {
          return { ...bird, likes: bird.likes + 1 };
        } else {
          return { ...bird, likes: bird.likes - 1 };
        }
      } else {
        return bird;
      }
    });
    setBirdsList(updatedArray);
  };

  const router = createBrowserRouter([
    {
      path: '/', element: < Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: < Home /> },
        {
          path: '/animals',
          element: (
            <Animals
              searchHandler={searchHandler}
              likeHandler={likeHandler}
              removeHandler={removeHandler}
              searchInput={searchInput}
              animalsList={animalsList}
            />
          )
        },
        {
          path: '/birds',
          element: (
            <Birds
              searchHandler={searchHandler}
              likeBirdHandler={likeBirdHandler}
              removeBirdHandler={removeBirdHandler}
              searchInput={searchInput}
              birdsList={birdsList}
            />
          )
        },
        { path: '/about', element: < About /> },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App