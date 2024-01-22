import { useParams, useNavigate } from "react-router-dom";

function SinglePage(props) {
    // using useparams hook to get the params from the url
    const params = useParams();
    // using useNavigate hook to navigate back to the previous page
    let navigate = useNavigate();
    // creating an array and using the params to find the data
    let elArray = props[params.category]
    // using find method to find the category data
    let data = elArray.find((el) => el.name == params.name);

    return (
        <main>
            <div className="singlecardwrap">
                <h2>{data.name}</h2>
                <img className="singlecardimg" src={`https://source.unsplash.com/400x400/?${data.name}`} alt="no img"></img>
                <p className="datalikes">Likes: {data.likes}
                    <span className="material-symbols-outlined">
                        {data.likes >= 0 ? 'favorite' : 'heart_broken'}
                    </span></p>
                <button className="returnbtn" onClick={() => navigate(-1)}>Return</button>
            </div>
        </main>
    )
}

export default SinglePage