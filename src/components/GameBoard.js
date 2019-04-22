import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Questions from './Questions'
import Categories from './Categories'

const options = [{
  value: 'Beginner',
  label: 'Beginner'
}, {
  value: 'Intermediate',
  label: 'Intermediate'
}, {
  value: 'Advanced',
  label: 'Advanced'
}];

const GameBoard = () => {

  const [question, setQuestion] = useState('')
  const [questionList, setQuestionList] = useState([])
  const [answer, setAnswer] = useState([])
  const [level, setLevel] = useState('Beginner')

  const onQuestionChange = e => {
    e.preventDefault()
    setQuestion(e.target.value)
  }

  const onAnswerChange = e => {
    e.preventDefault()
    setAnswer(e.target.value)
  }

  const onLevelChange = e => {
    e.preventDefault()
    setLevel(e.target.value)
  }


  const handleAddQuestion = e => {
    e.preventDefault()
    setQuestionList([...questionList, {
      body: question,
      answer: answer,
      level: level
    }])
    setQuestion('')
    setAnswer('')
    setLevel('Beginner')
  }


         return (
            <div className="container pt-5">
              <h1 className="text-center mb-5">History Heroes</h1>
              <Categories />
                <Form className="m-auto col-sm">
                  <Form.Group control="formBasicAddQuestion">
                      <Form.Control value={question} onChange={onQuestionChange} type="text" placeholder="Enter new question" />
                      <Form.Control value={answer} onChange={onAnswerChange} type="text" placeholder="Enter answer" />
                      <Form.Label>Level of Difficulty</Form.Label>
                      <select
                        name="difficulty"
                        value={level}
                        placeholder="Select level of difficulty"
                        onChange={onLevelChange}
                      >
                        <option value="Beginner" label="Beginner">Beginner</option>
                        <option value="Intermediate" label="Intermediate">Intermediate</option>
                        <option value="Advanced" label="Advanced">Advanced</option>
                      </select>
                      <div className="row justify-content-center">
                        <button onClick={handleAddQuestion} className="btn btn-success mb-2">
                        Add Question
                        </button>
                      </div>
                  </Form.Group>
                </Form>
              <div className="row text-center">
                {questionList.map( question => {
                  return <div className="col-sm p-4">
                          <Questions
                           body={question.body} 
                           answer={question.answer} 
                           variant={'outline-primary'} 
                           level={question.level}
                          />
                         </div>
                })}
              </div>
              <div className="row text-center">
              {questionList.map( question => {
                  return <div className="col-sm p-4">
                          <Questions
                           body={question.body} 
                           answer={question.answer} 
                           variant={'outline-primary'} 
                           level={question.level}/>
                         </div>
                })}
              </div>
              <div className="row text-center">
              {questionList.map( question => {
                  return <div className="col-sm p-4">
                          <Questions
                           body={question.body} 
                           answer={question.answer} 
                           variant={'outline-primary'} 
                           level={question.level}/>
                         </div>
                })}             
              </div>
              <div className="row text-center">
                  <div className="col-sm p-4"><Questions body={"What government agency was created by Herbert Hoover to save failing banks and businesses?"} answer={"Reconstruction Finance Corporation (RFC)"} variant={"danger"} level={"Final"} /></div>
              </div>
            </div>
    )
  }


export default GameBoard