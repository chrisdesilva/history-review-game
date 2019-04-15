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
              <div className="col-sm border p-4">G</div>
              <div className="col-sm border p-4">R</div>
              <div className="col-sm border p-4">E</div>
              <div className="col-sm border p-4">A</div>
              <div className="col-sm border p-4">T</div>
            </div>
            <div className="row text-center">
              <div className="col-sm p-4"><BeginnerQuestions body={"What group of Americans gained the right to vote from the Nineteenth Amendment?"} answer={"Women"} /></div>
              <div className="col-sm p-4"><BeginnerQuestions body={"What idea by Henry Ford made car manufacturing much more efficient?"} answer={"Assembly Line"} /></div>
              <div className="col-sm p-4"><BeginnerQuestions body={"What neighborhood of New York City became a center of African American culture during the 1920s?"} answer={"Harlem"} /></div>
              <div className="col-sm p-4"><BeginnerQuestions body={"What genre of music became extremely popular during the 1920s?"} answer={"Jazz"} /></div>
              <div className="col-sm p-4"><BeginnerQuestions body={"The Prohibition movement led to the ban of what goods in the United States?"} answer={"Alcohol"} /></div>
            </div>
            <div className="row text-center">
              <div className="col-sm p-4"><IntermediateQuestions body={"What was the nickname given to the temporary towns built during the Great Depression?"} answer={"Hoovervilles"} /></div>
              <div className="col-sm p-4"><IntermediateQuestions body={"What event triggered the start of the Great Depression?"} answer={"Stock market crash"} /></div>
              <div className="col-sm p-4"><IntermediateQuestions body={"What group of people was hit hardest by the Dust Bowl"} answer={"Farmers"} /></div>
              <div className="col-sm p-4"><IntermediateQuestions body={"Who was president at the start of the Great Depression?"} answer={"Herbert Hoover"} /></div>
              <div className="col-sm p-4"><IntermediateQuestions body={"Which company became successful after starting a mail-order system for consumer goods?"} answer={"Sears"} /></div>
            </div>
            <div className="row text-center">
              <div className="col-sm p-4"><AdvancedQuestions body={"What was the main goal of the Social Security Act?"} answer={"To help elderly people"} /></div>
              <div className="col-sm p-4"><AdvancedQuestions body={"What event led to the Red Scare?"} answer={"Communist Revolution in Russia"} /></div>
              <div className="col-sm p-4"><AdvancedQuestions body={"What was the name given to clubs that served alcohol illegally?"} answer={"Speakeasies"} /></div>
              <div className="col-sm p-4"><AdvancedQuestions body={"The Immigration Act of 1924 banned people all immigration from where?"} answer={"Asia"} /></div>
              <div className="col-sm p-4"><AdvancedQuestions body={"John Scopes was arrested for teaching what in school?"} answer={"Evolution"} /></div>
            </div>
            <div className="row text-center">
                <div className="col-sm p-4"><FinalQuestion body={"What government agency was created to save failing banks and businesses?"} answer={"Reconstruction Finance Corporation (RFC)"} /></div>
            </div>
          </div>
        )
    }
}

export default GameBoard