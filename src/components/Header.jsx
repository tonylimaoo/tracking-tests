import React, { useEffect } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useGtag } from '../hooks/useGtag';



const Header = () => {

    const location = useLocation();
    const { fireEvent } = useGtag();


    useEffect(() => {
        fireEvent("page_view")
    }, [location])


    return (
        <header className='header'>
            <Link className='logoSite' to='/'>
                Tests Tracking
            </Link>
            <nav>
                <Link to='/ecommerce/home'>Ecommerce</Link>
            </nav>
        </header>
    )
}

export default Header