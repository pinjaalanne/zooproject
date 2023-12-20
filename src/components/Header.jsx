import { NavLink } from 'react-router-dom'

function Header({ clearHandler }) {
    return (
        <header>
            <h1><NavLink className="logo" to="/">The Zoo</NavLink></h1>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/animals" onClick={clearHandler}>Animals</NavLink></li>
                    <li><NavLink to="/birds" onClick={clearHandler}>Birds</NavLink></li>
                    <li><NavLink to="/fish" onClick={clearHandler}>Fish</NavLink></li>
                    <li><NavLink to="/insects" onClick={clearHandler}>Insects</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
        </header>);
}

export default Header