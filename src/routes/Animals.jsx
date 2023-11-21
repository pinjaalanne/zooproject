import Card from '../components/Card.jsx'

function Animals({ animalsList, searchHandler, removeHandler, likeHandler, searchInput }) {

    return (
        <>
            <h1>
                Animals
            </h1>
            <input className="search" id="search" type="text"
                placeholder="Search" onChange={searchHandler}></input>
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
        </>
    );
}

export default Animals