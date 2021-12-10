import React from 'react'
import { IconContext } from 'react-icons';
import { BsArrowDown } from 'react-icons/bs';


const IconArrowDown = () => {

    return (
        <IconContext.Provider value={{ color: 'white', size:'3rem' }}>
            <div>
                <BsArrowDown />
            </div>
        </IconContext.Provider>
        )
}
export default IconArrowDown
