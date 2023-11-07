function Card(props) {
    return (<div className="card">
        <button className="btn">x</button>
        <img src="giraffe.jpeg" alt="no img"></img>
        <div className="textwrap">
            <h3>Name: {props.name}</h3>
            <div className="symbolwrap">
                <button className="btnminus">-</button>
                <p className="brokenheart">&#128148;</p>
                <p className="heart">&#129294;</p>
                <p className="likes">{props.likes}</p>
                <button className="btnplus">+</button>
            </div>
        </div>
    </div>
    );
}

export default Card