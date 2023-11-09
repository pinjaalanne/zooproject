function Card({ name, likes, click }) {
    return (<div className="card">
        <button className="btn" onClick={click}>x</button>
        <img src={`https://source.unsplash.com/400x400/?${name}`} alt="no img"></img>
        <div className="textwrap">
            <p>Name: {name}</p>
            <div className="symbolwrap">
                <button className="btnminus"><span className="material-symbols-outlined">
                    heart_minus
                </span></button>
                {/*                 <p className="brokenheart">&#128148;</p> */}
                <p className="likes">{likes}</p>
                <p className="heart"><span className="material-symbols-outlined">
                    favorite
                </span></p>
                <button className="btnplus"><span className="material-symbols-outlined">
                    heart_plus
                </span></button>
            </div>
        </div>
    </div>
    );
}

export default Card