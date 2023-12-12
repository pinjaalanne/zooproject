import { NavLink } from 'react-router-dom'
import fox from '../assets/fox.jpg'
import owl from '../assets/owl.jpg'

function Home() {
    return (
        <div className="frontimages">
            <NavLink to="/animals" className="animalsbtn">
                <img className="fox" src={fox} alt="no img"></img></NavLink>
            <NavLink to="/birds" className="birdsbtn">
                <img className="owl" src={owl} alt="no img"></img></NavLink>
        </div>
    );
}

export default Home