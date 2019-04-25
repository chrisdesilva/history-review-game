import React, { useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import Questions from './Questions'
import Categories from './Categories'

const GameBoard = () => {

  const [question, setQuestion] = useState('')
  const [questionList, setQuestionList] = useState([])
  const [answer, setAnswer] = useState([])
  const [level, setLevel] = useState('Beginner')
  const [variant, setVariant] = useState('primary')

  const onQuestionChange = e => {
    e.preventDefault()
    setQuestion(e.target.value)
  }

  const onAnswerChange = e => {
    e.preventDefault()
    setAnswer(e.target.value)
  }

  const onLevelChange = e => {
    setLevel(e.target.value)
    if(e.target.value === "Beginner") {
      setVariant('primary')
    } else if (e.target.value === "Intermediate") {
      setVariant('warning')
    } else if (e.target.value === "Advanced") {
      setVariant('danger')
    } else if (e.target.value === "Final") {
      setVariant('danger')
    }
  }

  const handleAddQuestion = e => {
    e.preventDefault()
    setQuestionList([...questionList, {
      body: question,
      answer: answer,
      level: level,
      variant: variant
    }])
    setQuestion('')
    setAnswer('')
  }


         return (
            <div className="container pt-5">
              <h1 className="text-center mb-5">History Heroes</h1>
              <Categories />
              {questionList.length < 15 &&<p>Please enter 5 beginner, 5 intermediate, and 5 advanced questions</p>}
              <Form className="mt-5">
                <Form.Row control="formBasicAddQuestion">
                    <Col>
                      <Form.Control value={question} onChange={onQuestionChange} type="text" placeholder="Enter new question" />
                    </Col>
                    <Col>
                      <Form.Control value={answer} onChange={onAnswerChange} type="text" placeholder="Enter answer" />
                    </Col>
                    <Col>
                      <Form.Control as="select" onChange={onLevelChange}>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Advanced">Final</option>
                      </Form.Control>
                    </Col>
                    <button onClick={handleAddQuestion} className="btn btn-success mb-2">
                      Add Question
                    </button>
                </Form.Row>
              </Form>
              <div className="row text-center">
                {questionList.map( question => {
                  return question.level === "Beginner" && <div className="col-sm p-4">
                    <Questions 
                      body={question.body} 
                      answer={question.answer} 
                      level={question.level}
                      variant={question.variant}
                    />
                  </div> 
                })}
              </div>
              <div className="row text-center">
              {questionList.map( question => {
                return question.level === "Intermediate" && <div className="col-sm p-4">
                  <Questions 
                    body={question.body} 
                    answer={question.answer} 
                    level={question.level}
                    variant={question.variant}
                  />
                </div> 
              })}
              </div>
              <div className="row text-center">
              {questionList.map( question => {
                return question.level === "Advanced" && <div className="col-sm p-4">
                  <Questions 
                    body={question.body} 
                    answer={question.answer} 
                    level={question.level}
                    variant={question.variant}
                  />
                </div> 
              })}
              </div>
              <div className="row text-center">
                {question.level === "Final" && 
                  <div>
                    <Questions 
                      body={question.body} 
                      answer={question.answer} 
                      level={question.level}
                      variant={question.variant}
                    />  
                  </div>}
              </div>
            </div>
    )
  }


export default GameBoard