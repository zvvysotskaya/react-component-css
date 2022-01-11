import React from 'react'
import Header from '../../shared/header'
const BaseLayout = (props) => {

    return (
        <>
            <Header/>
            <main>{props.children}</main>
        </>
        
        )
}
export default BaseLayout