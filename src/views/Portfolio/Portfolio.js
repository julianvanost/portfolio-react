import React from 'react'
import Pdf from './Resume.pdf'

const Portfolio = () => {
  return (
    <main>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div>
              <h1>Portfolio</h1>
            </div>
            <p>
              <svg className="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1"
                width="32" aria-hidden="true">
                <path fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                </path>
              </svg>
              <a className="largerLinks" target="_blank" rel="noopener noreferrer" href="https://github.com/julianvanost">
                My Github Page
            </a>
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
              </svg>
              <a className="largerLinks" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/julian-b-van-ost/">
                My Linkedin Page
            </a>
            </p>
            <p>
              <img alt="Download Resume icon" src="https://img.icons8.com/ios-filled/2x/open-resume.png" className="icons"></img>
              <a className="largerLinks" target="_blank" rel="noopener noreferrer" href={Pdf}>
                My Resume
            </a>
            </p>
          </div>
          <div className='row linkList'>
            <h4 className="page-header">
              Example Work
            </h4>
            <div className="projects">
              <p className="projectList subHeading">Freelance Websites</p>
              <ul>
                <li><a href="https://www.sycstreetwear.com/" rel="noopener noreferrer" target="_blank">sycstreetwear.com</a> - Show Your Compassion Streetwear</li>
                <li><a href="https://www.silbermanlaw.com/" rel="noopener noreferrer" target="_blank">silbermanlaw.com</a> - Silberman Law Offices, LLP Company Website</li>
                <li><a href="https://www.leonardsilbermanlaw.com/" rel="noopener noreferrer" target="_blank">leonardsilbermanlaw.com</a> - Leonard Silberman Law Office Company Website</li>
                <li><a href="https://www.returntoworksolutions.com/" rel="noopener noreferrer" target="_blank">returntoworksolutions.com</a> - Rehab 90 / Return to Work Solutions Company Website</li>
                <li><a href="https://www.returntoworksolutions.com/julian-van-ost" rel="noopener noreferrer" target="_blank">julian-van-ost</a> - An Alternate Web Portfolio</li>
              </ul>
            </div>
            <div className="bottom-height"></div>
            <p className="subHeading">Side Projects & Collaborations</p>
            <span>
              <a target="_blank" rel="noopener noreferrer" href="https://julianvanost.github.io/Code-Quiz/">
                <img className="logo" src={require("./CodeQuizLogo.png")} alt="Code Quiz"></img>
              </a>
            </span>
            <span>
              <a target="_blank" rel="noopener noreferrer" href="https://preyx.github.io/bcprj1-api/">
                <img className="logo" src={require("./ci-logo.png")} alt="CrypIt Logo"></img>
              </a>
            </span>
            <span>
              <a target="_blank" rel="noopener noreferrer" href="https://ambutrack.herokuapp.com/">
                <img className="logo" src={require("./AbutrackLogo.png")} alt="Ambutrack Logo"></img></a>
            </span>
            <span>
              <a target="_blank" rel="noopener noreferrer" href="https://julianvanost.github.io/Day-Scheduler/">
                <img className="logo" src={require("./DayPlannerLogo.png")} alt="Day Planner"></img>
              </a>
            </span>
            <span>
              <a target="_blank" rel="noopener noreferrer" href="https://cartner-golf.herokuapp.com/">
                <img className="logo" src={require("./CartnerGolf.png")} alt="Cartner Golf Logo"></img>
              </a>
            </span>
          </div>
        </div>
      </div>
    </main >
  )
}

export default Portfolio