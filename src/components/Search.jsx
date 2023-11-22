function Search(props) {
    <input className="search" id="search" type="text"
        placeholder="Search" onChange={props.searchHandler}></input>
}

export default Search