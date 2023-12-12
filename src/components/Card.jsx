import { Link } from "react-router-dom";

function Card({ name, likes, click, addLike, removeLike }) {

    return (
        <div className="card">
            <button className="removebtn" onClick={click}>x</button>
            <img className="cardimg" src={`https://source.unsplash.com/400x400/?${name}`} alt="no img"></img>
            <div className="textwrap">
                <p>Name: {name}</p>
                <div className="symbolwrap">
                    <button className="btnminus" onClick={removeLike}><span className="material-symbols-outlined">
                        heart_minus
                    </span></button>
                    <p className="likes">{likes}</p>
                    <span className="material-symbols-outlined">
                        {likes >= 0 ? 'favorite' : 'heart_broken'}
                    </span>
                    <button className="btnplus" onClick={addLike}>
                        <span className="material-symbols-outlined">
                            heart_plus
                        </span></button>
                </div>
                <Link className="seemore" to={`${name}/`}>See more..</Link>
            </div>
        </div>
    );
}

export default Card