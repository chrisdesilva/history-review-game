import React, { Component } from 'react'
import { Button, Modal } from "react-bootstrap"


class IntermediateQuestions extends Component {
  
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClearQuestion = this.handleClearQuestion.bind(this)

    this.state = {
      show: false,
      hidden: false
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
    render() {
        return (
            <div>
                <Button variant="outline-warning" id={this.state.hidden ? "hidden" : "inline"} onClick={this.handleShow}>
                Intermediate
                </Button>
                
                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Intermediate</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.body}</Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default IntermediateQuestions