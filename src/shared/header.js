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
            </ul>
        </header>
    )
}
export default Header