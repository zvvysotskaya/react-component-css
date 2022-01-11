import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import IconArrowDown from '../icons/icon-arrow-down'
//import IconArrowRight from '../icons/icon-arrow-right'
import { Helmet } from 'react-helmet'
const BtnFancyButtons = () => (

    <Container >
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Niconne&display=swap" rel="stylesheet"/>
        </Helmet>
        <Row className='justify-content-center bgBlack'>
            <Col className='text-center my-5' lg={5}>
                <h1 className='styledTitle'>Fancy Buttons</h1>
                <div className='fancyBtnContainer'>
                    <button className='btnFancy1'>
                        <StaticImage
                            src="../../images/gatsby-icon.png"
                            alt="A cat"
                            placeholder="blurred"
                            layout="fixed"
                            width={70}
                            height={70}
                        />
                    </button>&nbsp;&nbsp;&nbsp;
                    <button className='btnFancy2'>
                        <StaticImage
                            src="../../images/gatsby-icon.png"
                            alt="A cat"
                            placeholder="blurred"
                            layout="fixed"
                            width={70}
                            height={70}
                        />
                    </button><br/>
                    <button className='btnFancy3'>
                        <StaticImage
                            src="../../images/gatsby-icon.png"
                            alt="A cat"
                            placeholder="blurred"
                            layout="fixed"
                            width={70}
                            height={70}
                        />
                    </button>
                </div>
                
            </Col>
        </Row>
        <Row>
            <Col className='text-center my-5' lg={5}>
                
            </Col>
        </Row>
    </Container>
)
export default BtnFancyButtons