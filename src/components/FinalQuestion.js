import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap"


const FinalQuestion = props => {
  const [show, setShow] = useState(false)
  const [answer, setAnswer] = useState(false)

  //close question modal
  const handleClose = () => {
    setShow(false);
  }

  //open question modal
  const handleShow = () => {
    setShow(true);
  }

  const handleShowAnswer = () => {
    setAnswer(true)
  }
        return (
            <div>
                <Button variant="danger" onClick={handleShow} block>
                Final
                </Button>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Final</Modal.Title>
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


export default FinalQuestion