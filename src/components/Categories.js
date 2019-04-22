import React, { useState } from 'react'
import { Col, Form } from 'react-bootstrap'

const Categories = () => {

    const [newTopic, setNewTopic] = useState('')
    const [topics, setTopics] = useState([])

    const onTopicChange = e => {
        e.preventDefault()
        setNewTopic(e.target.value)
    }

    const handleAddTopic = e => {
        e.preventDefault()
        setTopics([...topics, newTopic])
        setNewTopic('')
    }

    return (
        <div>
            {topics.length === 5 ? null: 
                <Form className="m-auto text-right justify-end">
                  <Form.Group control="formBasicAddTopic">
                    <Form.Row>
                      <Col>
                        <Form.Control value={newTopic} onChange={onTopicChange} type="text" placeholder="Enter Five Categories" />
                      </Col>
                      <Col>
                        <button onClick={handleAddTopic} className="btn btn-outline-success mb-2">
                            Add Category
                        </button>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                </Form>} 
            <div className="row text-center">
                <div className="col-sm border p-4">{topics[0]}</div>
                <div className="col-sm border p-4">{topics[1]}</div>
                <div className="col-sm border p-4">{topics[2]}</div>
                <div className="col-sm border p-4">{topics[3]}</div>
                <div className="col-sm border p-4">{topics[4]}</div>
            </div>
        </div>
    )
}

export default Categories