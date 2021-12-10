import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import IconArrowDown from '../icons/icon-arrow-down'
//import IconArrowRight from '../icons/icon-arrow-right'

const BtnNeonShadow = () => (
    
        <Container >
            <Row className='justify-content-center bgBlack'>
                <Col className='text-center my-5' lg={4}>
                    <div className='myContainer'>
                        <button className='btnNeon'>Hover Over Me</button>                        
                    </div>                   
                </Col>
            </Row>
        </Container>
   
    
)
export default BtnNeonShadow