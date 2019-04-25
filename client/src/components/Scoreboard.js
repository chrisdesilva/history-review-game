import React, { useState } from 'react'
import { Form, ButtonGroup } from 'react-bootstrap'
import Team from './Team'



const Scoreboard = () => {

    const [newTeam, setNewTeam] = useState("")
    const [teams, setTeams] = useState([])

    const handleAddTeam = e => {
        e.preventDefault()
        setNewTeam("")
        setTeams([...teams, {
          name: newTeam,
          score: 0
        }])
    }

    const handleRemoveTeam = index => {
      teams.splice(index, 1)
      setTeams( teams )
    }

    const onTeamNameChange = e => {
        e.preventDefault()
        setNewTeam(e.target.value)
    }
    
        return (
            <div>
              <div className="col-sm m-auto">
                <div className="row justify-content-center">
                  <Form className="m-auto">
                    <Form.Group control="formBasicAddTeam">
                        <Form.Control value={newTeam} onChange={onTeamNameChange} type="text" placeholder="Enter team name" />
                    </Form.Group>
                  <div className="row justify-content-center">
                  <ButtonGroup vertical>
                    <button onClick={handleAddTeam} className="btn btn-outline-success mb-2">
                      Add Team
                    </button>
                    <button onClick={handleRemoveTeam} className="btn btn-outline-warning">
                      Reset Teams
                    </button>
                  </ButtonGroup>
                  </div>
                  </Form>
                </div>
                <div className="row mt-5">
                {teams.map( team => {
                    return <div className="col-sm m-auto">
                            <Team
                                teamName={team.name}
                                change={onTeamNameChange}
                                remove={handleRemoveTeam}
                            />
                            </div>
                })}
                    
                  </div>
              </div>
                </div>
        )
    }


export default Scoreboard