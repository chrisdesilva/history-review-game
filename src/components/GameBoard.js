import React, { Component } from 'react'
import BeginnerQuestions from './BeginnerQuestions'
import IntermediateQuestions from './IntermediateQuestions'
import AdvancedQuestions from './AdvancedQuestions'
import FinalQuestion from './FinalQuestion'

class GameBoard extends Component {
    
    render() {
        return (
            <div className="container pt-5">
            <h1 className="text-center mb-5">History Heroes</h1>
            <div className="row text-center">
              <div className="col-sm border p-4">Progressive Leaders</div>
              <div className="col-sm border p-4">Women's Rights</div>
              <div className="col-sm border p-4">Worker's Rights</div>
              <div className="col-sm border p-4">Political Reform</div>
              <div className="col-sm border p-4">Amendments</div>
            </div>
            <div className="row text-center">
              <div className="col-sm p-4"><BeginnerQuestions body={"Which president helped preserve more than 200 million acres of land?"} answer={"Theodore Roosevelt"} /></div>
              <div className="col-sm p-4"><BeginnerQuestions body={"How did Alice Paul help improve life for women?"} answer={"Helped give women the right to vote"} /></div>
              <div className="col-sm p-4"><BeginnerQuestions body={"What group of people was helped from the March of the Mill Children?"} answer={"Child workers"} /></div>
              <div className="col-sm p-4"><BeginnerQuestions body={"In which state did Robert La Follette become governor to start his political reforms?"} answer={"Wisconsin"} /></div>
              <div className="col-sm p-4"><BeginnerQuestions body={"The 18th Amendment was passed based on public support for prohibition. What became illegal after the amendment was passed?"} answer={"Alcohol"} /></div>
            </div>
            <div className="row text-center">
              <div className="col-sm p-4"><IntermediateQuestions body={"Which progressive leader helped start the NAACP?"} answer={"W.E.B. DuBois"} /></div>
              <div className="col-sm p-4"><IntermediateQuestions body={"Who was the first woman elected to Congress?"} answer={"Jeannette Rankin"} /></div>
              <div className="col-sm p-4"><IntermediateQuestions body={"In which state did the March of the Mill Children begin?"} answer={"Pennsylvania"} /></div>
              <div className="col-sm p-4"><IntermediateQuestions body={"Give an example of a political position that could be subject to a recall."} answer={"State or local positions like mayor or governor"} /></div>
              <div className="col-sm p-4"><IntermediateQuestions body={"Who could be directly elected after the 17th Amendment was passed?"} answer="Senators" /></div>
            </div>
            <div className="row text-center">
              <div className="col-sm p-4"><AdvancedQuestions body={"In which national park did Theodore Roosevelt and John Muir have their famous camping trip?"} answer={"Yosemite"} /></div>
              <div className="col-sm p-4"><AdvancedQuestions body={"Finish the quote from Alice Paul: '...to me there is nothing complicated about ordinary __________' "} answer={"equality"} /></div>
              <div className="col-sm p-4"><AdvancedQuestions body={"In 1903, Oregon passed a law limiting the workday of women to how many hours?"} answer={"10"} /></div>
              <div className="col-sm p-4"><AdvancedQuestions body={"What election system did Robert La Follette help create?"} answer={"Primary"} /></div>
              <div className="col-sm p-4"><AdvancedQuestions body={"What was created under the 16th Amendment?"} answer={"Income tax"} /></div>
            </div>
            <div className="row text-center">
                <div className="col-sm p-4"><FinalQuestion body={"What was the nickname given to the group of women that fought for the right to vote?"} answer={"Suffragettes"} /></div>
            </div>
          </div>
        )
    }
}

export default GameBoard