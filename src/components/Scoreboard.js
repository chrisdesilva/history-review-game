import React, { Component } from 'react'
import { Form, ButtonGroup } from 'react-bootstrap'
import Team from './Team'



class Scoreboard extends Component {

    state = {
        newTeam: "",
        teams: []
    }


    handleAddTeam = (e) => {
        e.preventDefault()
        const newTeam = this.state.newTeam
        this.setState(
          { 
            newTeam: "",
            teams: 
            [...this.state.teams, 
              {
                name: newTeam,
                score: 0
              }
            ],
          }
        )
    }

    handleRemoveTeam = (index) => {
      const teams = this.state.teams
      teams.splice(index, 1)
      this.setState({ teams })
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
              <div className="col-sm m-auto">
                <div className="row justify-content-center">
                  <Form className="m-auto">
                    <Form.Group control="formBasicAddTeam">
                        <Form.Control value={this.state.newTeam} onChange={this.onTeamNameChange} type="text" placeholder="Enter team name" />
                    </Form.Group>
                  <div className="row justify-content-center">
                  <ButtonGroup vertical>
                    <button onClick={this.handleAddTeam} className="btn btn-outline-success mb-2">
                    Add Team
                    </button>
                    <button onClick={this.handleRemoveTeam} className="btn btn-outline-warning">
                      Reset Teams
                    </button>
                  </ButtonGroup>
                  </div>
                  </Form>
                </div>
              </div>
                  <div className="row mt-5">
                {this.state.teams.map( (team) => {
                    return <div className="col-sm m-auto">
                            <Team
                                teamName={team.name}
                                change={this.onTeamNameChange}
                                remove={this.handleRemoveTeam}
                            />
                            </div>
                })}
                    
                  </div>
                </div>
        )
    }
}


export default Scoreboard