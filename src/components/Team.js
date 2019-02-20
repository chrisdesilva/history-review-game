import React from 'react'
import { ButtonGroup } from 'react-bootstrap'

const Team = (props) => (
<div>
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
  </div>
</div>
)



export default Team