import React, { Component } from 'react'
import { ButtonGroup } from 'react-bootstrap'

class Scoreboard extends Component {
    state = {
        team1: 0,
        team2: 0,
        team3: 0,
        team4: 0
    }

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
    
    render() {
        return (
            <div className="container m-auto pb-5">
                <div className="row mt-5">
                    <div className="col-sm m-auto">
                        <div className="row justify-content-center">Team 1:</div>
                        <div className="row justify-content-center">{this.state.team1}</div>
                        <div className="row justify-content-center mt-3">
                            <ButtonGroup vertical>
                                <button onClick={this.handleAddPointsTeamOne} className="btn btn-outline-success mb-2">
                                    Add Points
                                </button>
                                <button onClick={this.handleSubtractPointsTeamOne} className="btn btn-outline-danger">
                                    Subtract Points
                                </button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="col-sm m-auto">
                        <div className="row justify-content-center">Team 2:</div>
                        <div className="row justify-content-center"> {this.state.team2}</div>
                        <div className="row justify-content-center mt-3">
                            <ButtonGroup vertical>
                                <button onClick={this.handleAddPointsTeamTwo} className="btn btn-outline-success mb-2">
                                    Add Points
                                </button>
                                <button onClick={this.handleSubtractPointsTeamTwo} className="btn btn-outline-danger">
                                    Subtract Points
                                </button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="row justify-content-center">Team 3:</div>
                        <div className="row justify-content-center"> {this.state.team3}</div>
                        <div className="row justify-content-center mt-3">
                            <ButtonGroup vertical>
                                <button onClick={this.handleAddPointsTeamThree} className="btn btn-outline-success mb-2">
                                    Add Points
                                </button>
                                <button onClick={this.handleSubtractPointsTeamThree} className="btn btn-outline-danger">
                                    Subtract Points
                                </button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className="col-sm m-auto">
                        <div className="row justify-content-center">Team 4:</div>
                        <div className="row justify-content-center"> {this.state.team4}</div>
                        <div className="row justify-content-center mt-3">
                            <ButtonGroup vertical>
                                <button onClick={this.handleAddPointsTeamFour} className="btn btn-outline-success mb-2">
                                    Add Points
                                </button>
                                <button onClick={this.handleSubtractPointsTeamFour} className="btn btn-outline-danger">
                                    Subtract Points
                                </button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Scoreboard