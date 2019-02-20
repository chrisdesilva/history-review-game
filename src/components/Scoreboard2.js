import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import Team from './Team'



class Scoreboard2 extends Component {

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

    onTeamNameChange = (e) => {
        e.preventDefault()
        this.setState({
            newTeam: e.target.value
        })
    }

    handleAddPoints = () => {
      this.setState({
        score: this.state.teams.score + 1
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
                    <button onClick={this.handleAddTeam} className="btn btn-outline-success">
                        Add Team
                    </button>
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
                            />
                            </div>
                })}
                    
                  </div>
                </div>
        )
    }
}


export default Scoreboard2