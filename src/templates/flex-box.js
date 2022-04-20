import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../components/layout/baseLayout'
import Title from '../components/titles/title1'

const TitlesPage = () => (
    
    <Layout>        
        <div className='bgMaroon'>
            <Container>
                <Row className='justify-content-center'>
                    <Col className='' sm={6}>
                        <h1 className='text-center flexBoxTitle'>Flex-Wrap Property</h1>
                        <div className='animatedWrap'>
                            <div className='text-light px-2'>
                                <p>No Wrap</p>
                            </div>
                            <div className='fbContainerNoWrap'>
                                <div className='fbOuterBox'>
                                    <div className='fbInnerBox'>1</div>
                                </div>
                                <div className='fbOuterBox'>
                                    <div className='fbInnerBox'>2</div>
                                </div>
                                <div className='fbOuterBox'>
                                    <div className='fbInnerBox'>3</div>
                                </div>
                                <div className='fbOuterBox'>
                                    <div className='fbInnerBox'>4</div>
                                </div>
                                <div className='fbOuterBox'>
                                    <div className='fbInnerBox'>5</div>
                                </div>
                            </div>

                            <div className='text-light px-2'>
                                <p>Wrap</p>
                            </div>
                            <div className='fbContainerWrap'>
                                <div className='fbOuterBox'>
                                    <div className='fbInnerBox'>1</div>
                                </div>
                                <div className='fbOuterBox'>
                                    <div className='fbInnerBox'>2</div>
                                </div>
                                <div className='fbOuterBox'>
                                    <div className='fbInnerBox'>3</div>
                                </div>
                                <div className='fbOuterBox'>
                                    <div className='fbInnerBox'>4</div>
                                </div>
                                <div className='fbOuterBox'>
                                    <div className='fbInnerBox'>5</div>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>       
    </Layout>
)
export default TitlesPage