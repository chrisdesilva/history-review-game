import React, { Component } from 'react'
import { Button, Modal } from "react-bootstrap"


class AdvancedQuestions extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
    render() {
        return (
            <div>
                <Button variant="outline-danger" onClick={this.handleShow}>
                Advanced
                </Button>
                
                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Advanced</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.body}</Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default AdvancedQuestions