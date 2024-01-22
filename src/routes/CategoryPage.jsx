import Card from '../components/Card.jsx'
import Search from '../components/Search.jsx';
import { useParams } from 'react-router-dom';

function CategoryPage(props) {
    // useparams hook to get the params from the url
    const params = useParams();
    // using the params to get the category
    let category = params.category;

    return (
        <>
            <h2>
                {category}
            </h2>
            <Search searchHandler={props.searchHandler} />
            <main>
                <div className="cards">
                    {props[category]
                        /* filtering the cards for search */
                        .filter((el) =>
                            el.name
                                .toLowerCase()
                                .includes(props.searchInput.toLowerCase()))
                        /* mapping the cards/data */
                        .map((el) => (
                            <Card key={el.name}
                                {...el}
                                click={() => props.removeHandler(el.name, category)}
                                addLike={() => props.likeHandler(el.name, 'add', category)}
                                removeLike={() => props.likeHandler(el.name, 'remove', category)}
                            />))}
                </div>
            </main>
        </>
    );
}

export default CategoryPage