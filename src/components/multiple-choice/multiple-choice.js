import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'


const MultipleChoice = () => {

    const submit = e => {
        e.preventDefault()
    }

    return (
        <Container >
            <Row className='justify-content-center bgBlack'>
                <Col className='text-center my-5' lg={5}>
                    <h1 className='styledTitle  pb-5'>Multiple Choice</h1>
                    <p className='multipleChoiceQuestion pb-0 mb-0'>2 + 3 = ?</p>
                    <div className='formCheckStyle mb-3'>
                        <Form onSubmit={submit}>
                            <Form.Check
                                //disabled
                                type={`checkbox`}
                                label={`4`}
                                id={`choice1`}
                                className='choice'
                            />
                            <Form.Check
                                //disabled
                                type={`checkbox`}
                                label={`6`}
                                id={`choice2`}
                                className='choice'
                            />
                            <Form.Check
                                //disabled
                                type={`checkbox`}
                                label={`5`}
                                id={`choice3`}
                                className='choice'
                            />
                            <Form.Check
                                //disabled
                                type={`checkbox`}
                                label={`8`}
                                id={`choice4`}
                                className='choice'
                            />
                            <div className='my-5 '>
                                <button className='btnChoice' type='submit'>Submit</button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
        )
}

export default MultipleChoice