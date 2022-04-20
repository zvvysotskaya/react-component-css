import React from 'react'
import {Link}from 'gatsby'
const Header = () => {

    return (
        <header>
            <ul>
                <li>
                    <Link to='/buttons'>buttons</Link>
                    
                </li>
                <li>
                    <Link to='/titles'>titles</Link>
                </li>
                <li>
                    <Link to='/choice'>multiple choice</Link>
                </li>
                <li>
                    <Link to='/flex-box'>flex box</Link>
                </li>
            </ul>
        </header>
    )
}
export default Header