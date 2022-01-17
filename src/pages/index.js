import * as React from "react"
//import { Link } from "gatsby"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Seo from "../components/seo"
import BaseLayout from '../components/layout/baseLayout'
const IndexPage = () => (
    <BaseLayout>
        <Container>
            <Row>
                <Col className='text-center my-5'>
                    <h1>Home</h1>
                </Col>
            </Row>
        </Container>
    </BaseLayout>
    
)

export default IndexPage
