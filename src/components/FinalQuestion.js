import React, { Component } from 'react'
import { Button, Modal } from "react-bootstrap"


class FinalQuestion extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClearQuestion = this.handleClearQuestion.bind(this)
    this.handleShowAnswer = this.handleShowAnswer.bind(this);;

    this.state = {
      show: false,
      hidden: false,
      answer: false
    };
  }

  //close question modal
  handleClose() {
    this.setState({ show: false });
  }

  //open question modal
  handleShow() {
    this.handleClearQuestion()
    this.setState({ show: true });
  }

  //hide button after it's been clicked to clear it from game board
  handleClearQuestion() {
    this.setState({ hidden: true })
  }

  handleShowAnswer() {
    this.setState({ answer: true })
  }
  

    render() {
        return (
            <div>
                <Button variant="danger" onClick={this.handleShow} block>
                Final
                </Button>
                
                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Final</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {this.props.body}
                  <p id={this.state.answer ? "inline" : "hidden"}>{this.props.answer}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleShowAnswer}>Answer</Button>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default FinalQuestion