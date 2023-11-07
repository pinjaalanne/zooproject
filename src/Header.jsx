function Header(props) {
    return (
        <header>
            <h1>{props.logo}</h1>
            <h2>Search for your favorite animal</h2>
            <input className="search" id="search" type="text" placeholder="Search"></input>
        </header>);
}

export default Header