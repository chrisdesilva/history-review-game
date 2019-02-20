import React, { useState } from 'react'
import { ButtonGroup } from 'react-bootstrap'

const Team = (props) => {

const [score, setScore] = useState(0)

return (
  <div>
    <div className="row justify-content-center">{props.teamName}:</div>
      <div className="row justify-content-center">{score}</div>
        <div className="row justify-content-center mt-3">
        <ButtonGroup vertical>
          <button onClick={() => setScore(score + 1)} className="btn btn-outline-success mb-2">
              Add Points
          </button>
          <button onClick={() => setScore(score - 1)} className="btn btn-outline-danger mb-2">
              Subtract Points
          </button>
      </ButtonGroup>
    </div>
  </div>
  )
}



export default Team