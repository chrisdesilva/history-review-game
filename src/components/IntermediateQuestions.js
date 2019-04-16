import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap"


const IntermediateQuestions = props => {
  
  const [show, setShow] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [answer, setAnswer] = useState(false)

  //close question modal
  const handleClose = () => {
    setShow(false);
  }

  //open question modal
  const handleShow = () => {
    handleClearQuestion();
    setShow(true);
  }

  //hide button after it's been clicked to clear it from game board
  const handleClearQuestion = () => {
    setHidden(true);
  }

  const handleShowAnswer = () => {
    setAnswer(true)
  }
        return (
            <div>
                <Button variant="outline-warning" id={hidden ? "hidden" : "inline"} onClick={handleShow}>
                Intermediate
                </Button>
                
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Intermediate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {props.body}
                  <p id={answer ? "inline" : "hidden"}>{props.answer}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleShowAnswer}>Answer</Button>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }

export default IntermediateQuestions