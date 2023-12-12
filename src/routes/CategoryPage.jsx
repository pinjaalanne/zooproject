import Card from '../components/Card.jsx'
import Search from '../components/Search.jsx';
import { useParams } from 'react-router-dom';

function CategoryPage(props) {
    const params = useParams();
    let category = params.category;

    return (
        <>
            <h1>
                {category}
            </h1>
            <Search searchHandler={props.searchHandler} />
            <div className="cards">
                {props[category]
                    .filter((el) =>
                        el.name
                            .toLowerCase()
                            .includes(props.searchInput.toLowerCase()))
                    .map((el) => (
                        <Card key={el.name}
                            {...el}
                            click={() => props.removeHandler(el.name, category)}
                            addLike={() => props.likeHandler(el.name, 'add', category)}
                            removeLike={() => props.likeHandler(el.name, 'remove', category)}
                        />))}
            </div>
        </>
    );
}

export default CategoryPage