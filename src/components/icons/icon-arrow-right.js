import React from 'react'
import { IconContext } from 'react-icons';
import { BsArrowRightCircle } from 'react-icons/bs';


const IconArrowRight = () => {

    return (
        <IconContext.Provider value={{ color: 'white', size:'1.6rem' }}>
            <div>
                <BsArrowRightCircle />
            </div>
        </IconContext.Provider>
        )
}
export default IconArrowRight
