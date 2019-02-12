import React, { Component } from 'react'

class GameBoard extends Component {
    render() {
        return (
            <div className="container mt-5">
            <div className="row text-center">
              <div className="col-sm border p-4">Progressive Leaders</div>
              <div className="col-sm border p-4">Women's Rights</div>
              <div className="col-sm border p-4">Worker's Rights</div>
              <div className="col-sm border p-4">Political Reform</div>
              <div className="col-sm border p-4">Civil Rights</div>
            </div>
            <div className="row text-center">
              <div className="col-sm border border-danger p-4">100</div>
              <div className="col-sm border border-danger p-4">100</div>
              <div className="col-sm border border-danger p-4">100</div>
              <div className="col-sm border border-danger p-4">100</div>
              <div className="col-sm border border-danger p-4">100</div>
            </div>
            <div className="row text-center">
              <div className="col-sm border border-danger p-4">200</div>
              <div className="col-sm border border-danger p-4">200</div>
              <div className="col-sm border border-danger p-4">200</div>
              <div className="col-sm border border-danger p-4">200</div>
              <div className="col-sm border border-danger p-4">200</div>
            </div>
            <div className="row text-center">
              <div className="col-sm border border-danger p-4">300</div>
              <div className="col-sm border border-danger p-4">300</div>
              <div className="col-sm border border-danger p-4">300</div>
              <div className="col-sm border border-danger p-4">300</div>
              <div className="col-sm border border-danger p-4">300</div>
            </div>
            <div className="row text-center">
              <div className="col-sm border border-danger p-4">400</div>
              <div className="col-sm border border-danger p-4">400</div>
              <div className="col-sm border border-danger p-4">400</div>
              <div className="col-sm border border-danger p-4">400</div>
              <div className="col-sm border border-danger p-4">400</div>
            </div>
            <div className="row text-center">
              <div className="col-sm border border-danger p-4">500</div>
              <div className="col-sm border border-danger p-4">500</div>
              <div className="col-sm border border-danger p-4">500</div>
              <div className="col-sm border border-danger p-4">500</div>
              <div className="col-sm border border-danger p-4">500</div>
            </div>
          </div>
        )
    }
}

export default GameBoard