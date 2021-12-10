import * as React from "react"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Seo from "../components/seo"

const IndexPage = () => (
    <Container>
        <Row>
            <Col className='text-center my-5'>
                <Seo title="Home" />
                <p>
                    <Link to="/buttons">Buttons</Link> <br />
                </p>
            </Col>
        </Row>
    
    </Container>
)

export default IndexPage
