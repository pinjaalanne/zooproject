import { useParams, useNavigate } from "react-router-dom";

function SinglePage(props) {
    const params = useParams();
    let navigate = useNavigate();

    console.log(params, 'this is the params');
    let elArray = props[params.category]
    console.log(elArray, 'this is the array');

    let data = elArray.find((el) => el.name == params.name);
    console.log(data, 'this the data');

    return (
        <div className="singlecardwrap">
            <h2>{data.name}</h2>
            <img className="singlecardimg" src={`https://source.unsplash.com/400x400/?${data.name}`} alt="no img"></img>
            <p className="datalikes">Likes: {data.likes}
                <span className="material-symbols-outlined">
                    {data.likes >= 0 ? 'favorite' : 'heart_broken'}
                </span></p>
            <button className="returnbtn" onClick={() => navigate(-1)}>Return</button>
        </div>
    )
}

export default SinglePage