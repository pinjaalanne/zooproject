import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { animals, birds, fish, insects } from './animalsList.js'
import Root from './routes/Root'
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import CategoryPage from './routes/CategoryPage';
import SinglePage from './routes/SinglePage.jsx';
import ErrorPage from './routes/ErrorPage'

function App() {
  // creating a state for the zoo(animals, birds, fish, insects)
  const [zoo, setZoo] = useState(
    { animals: animals, birds: birds, fish: fish, insects: insects })
  // creating a state for the search input
  const [searchInput, setSearchInput] = useState('');
  // creating the searchhandler
  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };
  // function to remove the animal card from the page
  const removeHandler = (name, category) => {
    const updatedArray = zoo[category].filter(el => el.name !== name);
    setZoo({ ...zoo, [category]: updatedArray });
  }
  // function to add likes or dislikes to the animal card
  const likeHandler = (name, action, category) => {
    const updatedArray = zoo[category].map((el) => {
      if (el.name === name) {
        if (action === 'add') {
          return { ...el, likes: el.likes + 1 };
        } else {
          return { ...el, likes: el.likes - 1 };
        }
      } else {
        return el;
      }
    });
    setZoo({ ...zoo, [category]: updatedArray });
  };
  // function to clear the search input
  const clearHandler = () => {
    setSearchInput('');
  }
  // creating the router
  const router = createBrowserRouter([
    {
      path: '/', element: (
        < Root clearHandler={clearHandler} />),
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: < Home /> },
        {
          path: ':category',
          element: (
            <CategoryPage
              {...zoo}
              searchHandler={searchHandler}
              likeHandler={likeHandler}
              removeHandler={removeHandler}
              searchInput={searchInput}
            />
          )
        },
        {
          path: ':category/:name',
          element: (
            <SinglePage
              {...zoo}
            />
          )
        },
        { path: '/about', element: < About /> },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App