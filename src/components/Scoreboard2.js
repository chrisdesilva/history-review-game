import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Team from './Team'

class Scoreboard2 extends Component {

    state = {
        newTeam: "",
        teams: [
            {
                name: "",
                score: 0
            }
        ]
    }

    handleAddTeam = () => {
        const newTeam = this.state.newTeam
        this.setState({
            teams: this.state.teams.concat({newTeam, score: 0})
        })
    }

    onTeamNameChange = (e) => {
        e.preventDefault()
        this.setState({
            newTeam: e.target.value
        })
    }



    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Control onChange={this.onTeamNameChange} type="text" placeholder="Enter team name" />
                    </Form.Group>
                    <button onClick={this.handleAddTeam} className="btn btn-outline-success">
                        Add Team
                    </button>
                </Form>
                {this.state.teams.map( (team, index) => {
                    return <Team
                                teamName={team.teamName[index]}
                                points={team.points[index]}
                                add={this.handleAddPoints}
                                subtract={this.handleSubtractPoints}
                                change={this.onTeamNameChange}
                            />
                })}
            </div>
        )
    }
}

export default Scoreboard2