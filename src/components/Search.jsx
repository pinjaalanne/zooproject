function Search(props) {
    return (
        <input className="search" id="search" type="text"
            placeholder="Search" onChange={props.searchHandler}></input>
    )
}

export default Search