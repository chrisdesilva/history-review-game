import React from 'react'
import { ButtonGroup, Form } from 'react-bootstrap'

const Team = (props) => (
    <div className="container m-auto pb-5">
        <div className="row mt-5">
            <div className="col-sm m-auto">
                <div className="row justify-content-center">{props.teamName}:</div>
                <div className="row justify-content-center">{props.points}</div>
                <div className="row justify-content-center mt-3">
                    <ButtonGroup vertical>
                        <button onClick={props.add} className="btn btn-outline-success mb-2">
                            Add Points
                        </button>
                        <button onClick={props.subtract} className="btn btn-outline-danger mb-2">
                            Subtract Points
                        </button>
                    </ButtonGroup>
                    <Form>
                        <Form.Group controlId="formBasicTeamName">
                            <Form.Control value={props.teamName} onChange={props.change} type="text" placeholder="Enter Team Name" />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    </div>
)


export default Team