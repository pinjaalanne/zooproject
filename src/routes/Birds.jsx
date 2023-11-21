import Card from '../components/Card.jsx'

function Birds({ birdsList, searchHandler, removeBirdHandler, likeBirdHandler, searchInput }) {

    return (
        <>
            <h1>
                Birds
            </h1>
            <input className="search" id="search" type="text"
                placeholder="Search" onChange={searchHandler}></input>
            <div className="cards">
                {birdsList
                    .filter((bird) =>
                        bird.name.toLowerCase().includes(searchInput.toLowerCase()))
                    .map((bird) => (
                        <Card key={bird.name}
                            {...bird}
                            click={() => removeBirdHandler(bird.name)}
                            addLike={() => likeBirdHandler(bird.name, 'add')}
                            removeLike={() => likeBirdHandler(bird.name, 'remove')}
                        />))}
            </div>
        </>
    );
}

export default Birds