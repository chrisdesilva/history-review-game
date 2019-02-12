import React, { Component } from 'react'

class Scoreboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm m-auto">
                        <div className="row">Team 1:</div>
                        <div className="row">
                            <button className="btn btn-outline-success">
                                Add Points
                            </button>
                        </div>
                    </div>
                    <div className="col-sm m-auto">
                        <div className="row">Team 2:</div>
                        <div className="row">
                            <button className="btn btn-outline-success">
                                Add Points
                            </button>
                        </div>
                    </div>
                    <div className="col-sm m-auto">
                        <div className="row">Team 3:</div>
                        <div className="row">
                            <button className="btn btn-outline-success">
                                Add Points
                            </button>
                        </div>
                    </div>
                    <div className="col-sm m-auto">
                        <div className="row">Team 4:</div>
                        <div className="row">
                            <button className="btn btn-outline-success">
                                Add Points
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Scoreboard