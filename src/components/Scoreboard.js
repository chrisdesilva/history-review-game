import React, { Component } from 'react'
import { ButtonGroup, Form } from 'react-bootstrap'

class Scoreboard extends Component {
    state = {
        team1: 0,
        team2: 0,
        team3: 0,
        team4: 0,
        team5: 0,
        team1Name: "Team 1",
        team2Name: "Team 2",
        team3Name: "Team 3",
        team4Name: "Team 4",
        team5Name: "Team 5"
    }

    //add 1 points to a given team
    handleAddPointsTeamOne = () => {
        this.setState({
            team1: this.state.team1 + 1
        })
    }
    handleAddPointsTeamTwo = () => {
        this.setState({
            team2: this.state.team2 + 1
        })
    }
    handleAddPointsTeamThree = () => {
        this.setState({
            team3: this.state.team3 + 1
        })
    }
    handleAddPointsTeamFour = () => {
        this.setState({
            team4: this.state.team4 + 1
        })
    }
    handleAddPointsTeamFive = () => {
        this.setState({
            team5: this.state.team5 + 1
        })
    }

    //remove 1 point from a given team
    handleSubtractPointsTeamOne = () => {
        this.setState({
            team1: this.state.team1 - 1
        })
    }
    handleSubtractPointsTeamTwo = () => {
        this.setState({
            team2: this.state.team2 - 1
        })
    }
    handleSubtractPointsTeamThree = () => {
        this.setState({
            team3: this.state.team3 - 1
        })
    }
    handleSubtractPointsTeamFour = () => {
        this.setState({
            team4: this.state.team4 - 1
        })
    }
    handleSubtractPointsTeamFive = () => {
        this.setState({
            team5: this.state.team5 - 1
        })
    }

    //take input from form to change team names
    handleTeamOneNameChange = (e) => {
        this.setState({
            team1Name: e.target.value
        })
    }
    handleTeamTwoNameChange = (e) => {
        this.setState({
            team2Name: e.target.value
        })
    }
    handleTeamThreeNameChange = (e) => {
        this.setState({
            team3Name: e.target.value
        })
    }
    handleTeamFourNameChange = (e) => {
        this.setState({
            team4Name: e.target.value
        })
    }
    handleTeamFiveNameChange = (e) => {
        this.setState({
            team5Name: e.target.value
        })
    }
    
    render() {
        return (
            <div className="container m-auto pb-5">
                <div className="row mt-5">
                    <div className="col-sm m-auto">
                        <div className="row justify-content-center">{this.state.team1Name}:</div>
                        <div className="row justify-content-center">{this.state.team1}</div>
                        <div className="row justify-content-center mt-3">
                            <ButtonGroup vertical>
                                <button onClick={this.handleAddPointsTeamOne} className="btn btn-outline-success mb-2">
                                    Add Points
                                </button>
                                <button onClick={this.handleSubtractPointsTeamOne} className="btn btn-outline-danger mb-2">
                                    Subtract Points
                                </button>
                            </ButtonGroup>
                            <Form>
                                <Form.Group controlId="formBasicTeamName">
                                    <Form.Control value={this.state.team1Name} onChange={this.handleTeamOneNameChange} type="text" placeholder="Enter Team Name" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="col-sm m-auto">
                        <div className="row justify-content-center">{this.state.team2Name}:</div>
                        <div className="row justify-content-center"> {this.state.team2}</div>
                        <div className="row justify-content-center mt-3">
                            <ButtonGroup vertical>
                                <button onClick={this.handleAddPointsTeamTwo} className="btn btn-outline-success mb-2">
                                    Add Points
                                </button>
                                <button onClick={this.handleSubtractPointsTeamTwo} className="btn btn-outline-danger mb-2">
                                    Subtract Points
                                </button>
                            </ButtonGroup>
                            <Form>
                                <Form.Group controlId="formBasicTeamName">
                                    <Form.Control value={this.state.team2Name} onChange={this.handleTeamTwoNameChange} type="text" placeholder="Enter Team Name" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="row justify-content-center">{this.state.team3Name}:</div>
                        <div className="row justify-content-center"> {this.state.team3}</div>
                        <div className="row justify-content-center mt-3">
                            <ButtonGroup vertical>
                                <button onClick={this.handleAddPointsTeamThree} className="btn btn-outline-success mb-2">
                                    Add Points
                                </button>
                                <button onClick={this.handleSubtractPointsTeamThree} className="btn btn-outline-danger mb-2">
                                    Subtract Points
                                </button>
                            </ButtonGroup>
                            <Form>
                                <Form.Group controlId="formBasicTeamName">
                                    <Form.Control value={this.state.team3Name} onChange={this.handleTeamThreeNameChange} type="text" placeholder="Enter Team Name" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="col-sm m-auto">
                        <div className="row justify-content-center">{this.state.team4Name}:</div>
                        <div className="row justify-content-center"> {this.state.team4}</div>
                        <div className="row justify-content-center mt-3">
                            <ButtonGroup vertical>
                                <button onClick={this.handleAddPointsTeamFour} className="btn btn-outline-success mb-2">
                                    Add Points
                                </button>
                                <button onClick={this.handleSubtractPointsTeamFour} className="btn btn-outline-danger mb-2">
                                    Subtract Points
                                </button>
                            </ButtonGroup>
                            <Form>
                                <Form.Group controlId="formBasicTeamName">
                                    <Form.Control value={this.state.team4Name} onChange={this.handleTeamFourNameChange} type="text" placeholder="Enter Team Name" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                    <div className="col-sm m-auto">
                        <div className="row justify-content-center">{this.state.team5Name}:</div>
                        <div className="row justify-content-center"> {this.state.team5}</div>
                        <div className="row justify-content-center mt-3">
                            <ButtonGroup vertical>
                                <button onClick={this.handleAddPointsTeamFour} className="btn btn-outline-success mb-2">
                                    Add Points
                                </button>
                                <button onClick={this.handleSubtractPointsTeamFour} className="btn btn-outline-danger mb-2">
                                    Subtract Points
                                </button>
                            </ButtonGroup>
                            <Form>
                                <Form.Group controlId="formBasicTeamName">
                                    <Form.Control value={this.state.team5Name} onChange={this.handleTeamFiveNameChange} type="text" placeholder="Enter Team Name" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Scoreboard