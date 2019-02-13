import React, { Component } from 'react'
import { Button, Modal } from "react-bootstrap"


class FinalQuestion extends Component {

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
                <Button variant="danger" onClick={this.handleShow} block>
                Final
                </Button>
                
                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Final</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.body}</Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default FinalQuestion