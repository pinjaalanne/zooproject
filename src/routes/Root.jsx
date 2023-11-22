import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom'

function Root({ clearHandler }) {
    return (
        <>
            <Header clearHandler={clearHandler} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root