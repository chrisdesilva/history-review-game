import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Questions from './Questions'
import Categories from './Categories'

const GameBoard = () => {

  const [question, setQuestion] = useState('')
  const [questionList, setQuestionList] = useState([])
  const [answer, setAnswer] = useState([])

  const onQuestionChange = e => {
    e.preventDefault()
    setQuestion(e.target.value)
  }

  const onAnswerChange = e => {
    e.preventDefault()
    setAnswer(e.target.value)
  }

  const handleAddQuestion = e => {
    e.preventDefault()
    setQuestionList([...questionList, {
      body: question,
      answer: answer,
      variant: 'outline-primary',
      level: 'Beginner'
    }])
    setQuestion('')
    setAnswer('')
  }

         return (
            <div className="container pt-5">
              <h1 className="text-center mb-5">History Heroes</h1>
              <Categories />
              <Form className="m-auto">
                <Form.Group control="formBasicAddQuestion">
                    <Form.Control value={question} onChange={onQuestionChange} type="text" placeholder="Enter new question" />
                    <Form.Control value={answer} onChange={onAnswerChange} type="text" placeholder="Enter answer" />
                </Form.Group>
                <div className="row justify-content-center">
                  <button onClick={handleAddQuestion} className="btn btn-outline-success mb-2">
                  Add Question
                  </button>
                </div>
              </Form>
              <div className="row text-center">
                {questionList.map( question => {
                  return <div className="col-sm p-4"><Questions body={question.body} answer={question.answer} variant={question.variant} level={question.level}/></div>
                })}
              </div>
              <div className="row text-center">
                <div className="col-sm p-4"><Questions body={"What was the nickname given to the temporary towns built during the Great Depression?"} answer={"Hoovervilles"} variant={"outline-warning"} level={"Intermediate"} /></div>
                <div className="col-sm p-4"><Questions body={"What event triggered the start of the Great Depression?"} answer={"Stock market crash"} variant={"outline-warning"} level={"Intermediate"} /></div>
                <div className="col-sm p-4"><Questions body={"What group of people was hit hardest by the Dust Bowl?"} answer={"Farmers"} variant={"outline-warning"} level={"Intermediate"} /></div>
                <div className="col-sm p-4"><Questions body={"Who was president at the start of the Great Depression?"} answer={"Herbert Hoover"} variant={"outline-warning"} level={"Intermediate"} /></div>
                <div className="col-sm p-4"><Questions body={"Which company became successful after starting a mail-order system for consumer goods?"} answer={"Sears"} variant={"outline-warning"} level={"Intermediate"} /></div>
              </div>
              <div className="row text-center">
                <div className="col-sm p-4"><Questions body={"What was the main goal of the Social Security Act?"} answer={"To help elderly people"} variant={"outline-danger"} level={"Advanced"}/></div>
                <div className="col-sm p-4"><Questions body={"What event led to the Red Scare?"} answer={"Communist Revolution in Russia"} variant={"outline-danger"} level={"Advanced"}/></div>
                <div className="col-sm p-4"><Questions body={"What was the name given to clubs that served alcohol illegally?"} answer={"Speakeasies"} variant={"outline-danger"} level={"Advanced"}/></div>
                <div className="col-sm p-4"><Questions body={"The Immigration Act of 1924 banned all immigration from where?"} answer={"Asia"} variant={"outline-danger"} level={"Advanced"}/></div>
                <div className="col-sm p-4"><Questions body={"John Scopes was arrested for teaching what in school?"} answer={"Evolution"} variant={"outline-danger"} level={"Advanced"}/></div>
              </div>
              <div className="row text-center">
                  <div className="col-sm p-4"><Questions body={"What government agency was created by Herbert Hoover to save failing banks and businesses?"} answer={"Reconstruction Finance Corporation (RFC)"} variant={"danger"} level={"Final"} /></div>
              </div>
            </div>
    )
  }


export default GameBoard