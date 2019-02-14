import React, { Component } from 'react'
import BeginnerQuestions from './BeginnerQuestions'
import IntermediateQuestions from './IntermediateQuestions'
import AdvancedQuestions from './AdvancedQuestions'
import FinalQuestion from './FinalQuestion'

class GameBoard extends Component {
    
    render() {
        return (
            <div className="container pt-5">
            <div className="row text-center">
              <div className="col-sm border p-4">Progressive Leaders</div>
              <div className="col-sm border p-4">Women's Rights</div>
              <div className="col-sm border p-4">Worker's Rights</div>
              <div className="col-sm border p-4">Political Reform</div>
              <div className="col-sm border p-4">Amendments</div>
            </div>
            <div className="row text-center">
              <div className="col-sm p-4"><BeginnerQuestions body={"Which president helped preserve more than 200 million acres of land?"} /></div>
              <div className="col-sm p-4"><BeginnerQuestions body={"How did Alice Paul help improve life for women?"} /></div>
              <div className="col-sm p-4"><BeginnerQuestions body={"What group of people was helped from the March of the Mill People?"} /></div>
              <div className="col-sm p-4"><BeginnerQuestions body={"In which state did Robert La Follette become governor to start his political reforms?"} /></div>
              <div className="col-sm p-4"><BeginnerQuestions body={"The 18th Amendment was passed based on public support for prohibition. What became illegal after the amendment was passed?"} /></div>
            </div>
            <div className="row text-center">
              <div className="col-sm p-4"><IntermediateQuestions body={"Which progressive leader helped start the NAACP?"} /></div>
              <div className="col-sm p-4"><IntermediateQuestions body={"Who was the first woman elected to Congress?"} /></div>
              <div className="col-sm p-4"><IntermediateQuestions body={"In which state did the March of the Mill People begin?"} /></div>
              <div className="col-sm p-4"><IntermediateQuestions body={"Give an example of a political position that could be subject to a recall."} /></div>
              <div className="col-sm p-4"><IntermediateQuestions body={"Who could be directly elected after the 17th Amendment was passed?"} /></div>
            </div>
            <div className="row text-center">
              <div className="col-sm p-4"><AdvancedQuestions body={"In which national park did Theodore Roosevelt and John Muir have their famous camping trip?"} /></div>
              <div className="col-sm p-4"><AdvancedQuestions body={"Finish the quote from Alice Paul: '...to me there is nothing complicated about ordinary __________' "} /></div>
              <div className="col-sm p-4"><AdvancedQuestions body={"In 1903, Oregon passed a law limiting the workday of women to how many hours?"} /></div>
              <div className="col-sm p-4"><AdvancedQuestions body={"What election system did Robert La Follette help create?"} /></div>
              <div className="col-sm p-4"><AdvancedQuestions body={"What was created under the 16th Amendment?"} /></div>
            </div>
            <div className="row text-center">
                <div className="col-sm p-4"><FinalQuestion body={"What was the nickname given to the group of women that fought for the right to vote?"} /></div>
            </div>
          </div>
        )
    }
}

export default GameBoard