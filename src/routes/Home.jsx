import { NavLink } from 'react-router-dom'
import fox from '../assets/fox.jpg'
import owl from '../assets/owl.jpg'
import fish from '../assets/fish.jpeg'
import insects from '../assets/insects.jpeg'

function Home() {
    return (
        <main>
            <div className="frontimages">
                <NavLink to="/animals" className="imgbtn">
                    <img className="fox" src={fox} alt="no img"></img></NavLink>
                <NavLink to="/birds" className="imgbtn">
                    <img className="owl" src={owl} alt="no img"></img></NavLink>
                <NavLink to="/fish" className="imgbtn">
                    <img className="fish" src={fish} alt="no img"></img></NavLink>
                <NavLink to="/insects" className="imgbtn">
                    <img className="insects" src={insects} alt="no img"></img></NavLink>
            </div>
        </main>
    );
}

export default Home