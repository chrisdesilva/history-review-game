import React from 'react'
import Questions from './Questions'
import Categories from './Categories'

const GameBoard = () => (
            <div className="container pt-5">
              <h1 className="text-center mb-5">History Heroes</h1>
              <Categories />
              <div className="row text-center">
                <div className="col-sm p-4"><Questions body={"What group of Americans gained the right to vote from the Nineteenth Amendment?"} answer={"Women"} variant={"outline-primary"} level={"Beginner"}/></div>
                <div className="col-sm p-4"><Questions body={"What idea by Henry Ford made car manufacturing much more efficient?"} answer={"Assembly Line"} variant={"outline-primary"} level={"Beginner"}/></div>
                <div className="col-sm p-4"><Questions body={"What neighborhood of New York City became a center of African American culture during the 1920s?"} answer={"Harlem"} variant={"outline-primary"} level={"Beginner"}/></div>
                <div className="col-sm p-4"><Questions body={"What genre of music became extremely popular during the 1920s?"} answer={"Jazz"} variant={"outline-primary"} level={"Beginner"}/></div>
                <div className="col-sm p-4"><Questions body={"The Prohibition movement led to the ban of what goods in the United States?"} answer={"Alcohol"} variant={"outline-primary"} level={"Beginner"}/></div>
              </div>
              <div className="row text-center">
                <div className="col-sm p-4"><Questions body={"What was the nickname given to the temporary towns built during the Great Depression?"} answer={"Hoovervilles"} variant={"outline-warning"} level={"Intermediate"} /></div>
                <div className="col-sm p-4"><Questions body={"What event triggered the start of the Great Depression?"} answer={"Stock market crash"} variant={"outline-warning"} level={"Intermediate"} /></div>
                <div className="col-sm p-4"><Questions body={"What group of people was hit hardest by the Dust Bowl?"} answer={"Farmers"} variant={"outline-warning"} level={"Intermediate"} /></div>
                <div className="col-sm p-4"><Questions body={"Who was president at the start of the Great Depression?"} answer={"Herbert Hoover"} variant={"outline-warning"} level={"Intermediate"} /></div>
                <div className="col-sm p-4"><Questions body={"Which company became successful after starting a mail-order system for consumer goods?"} answer={"Sears"} variant={"outline-warning"} level={"Intermediate"} /></div>
              </div>
              <div className="row text-center">
                <div className="col-sm p-4"><Questions body={"What was the main goal of the Social Security Act?"} answer={"To help elderly people"} variant={"outline-danger"} level={"Advanced"}/></div>
                <div className="col-sm p-4"><Questions body={"What event led to the Red Scare?"} answer={"Communist Revolution in Russia"} variant={"outline-danger"} level={"Advanced"}/></div>
                <div className="col-sm p-4"><Questions body={"What was the name given to clubs that served alcohol illegally?"} answer={"Speakeasies"} variant={"outline-danger"} level={"Advanced"}/></div>
                <div className="col-sm p-4"><Questions body={"The Immigration Act of 1924 banned all immigration from where?"} answer={"Asia"} variant={"outline-danger"} level={"Advanced"}/></div>
                <div className="col-sm p-4"><Questions body={"John Scopes was arrested for teaching what in school?"} answer={"Evolution"} variant={"outline-danger"} level={"Advanced"}/></div>
              </div>
              <div className="row text-center">
                  <div className="col-sm p-4"><Questions body={"What government agency was created by Herbert Hoover to save failing banks and businesses?"} answer={"Reconstruction Finance Corporation (RFC)"} variant={"danger"} level={"Final"} /></div>
              </div>
            </div>
  )


export default GameBoard