import React, { useEffect, useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useGtag } from '../hooks/useGtag';
import { useCounterContext } from '../context/CounterContext';



const Header = () => {

    const location = useLocation();
    const { fireEvent, gtagSet } = useGtag();
    const { counter, setCounter } = useCounterContext();
    
    
    useEffect(() => {
        
        if (counter > 0) {
            gtagSet({ page_referrer: '' })
        }
        
        setCounter(counter + 1);
        
    }, [location])
    
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