import React from 'react'
import Pdf from "./GraduationCertificate.pdf";
import {
  Link
} from 'react-router-dom'

const About = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="page-header">
              <h1>About Me</h1>
            </div>
            <strong className="text-info">
              Currently available for hire!
              </strong>
            <div className="row">
              <p>
                I enjoy creating content on the web!
              </p>
              <p>
                I have professional experience in front-end web development, using: HTML, CSS, JavaScript, and JS plugins.
                I learned these skills during my employment with
                <a href={'https://www.exterro.com/'} target="_blank" rel="noopener noreferrer"> Exterro</a>
                . There, I worked with a small team to design and build the front-end of their latest application suite.
              </p>
              <p>
                Lately, I have been working with newer technologies and frameworks, such as: React.js, Mongo, and Node.js
                while completing<Link to='/portfolio'> freelance projects</Link>.
              </p>
              <p>
                In addition, I have been furthering my education.
              </p>
              <p>
                In April 2020, I graduated with a 4.0 from Univeristy of California Irvine, Division of Continuing Education:
                <a href={Pdf} target="_blank" rel="noopener noreferrer"> Full-Stack Flex Web Development </a>Coding Bootcamp.
              </p>
              <p>
                I have a particular knack for front-end work such as Design, CSS, and DOM manipulation. As such, my current goal
                is to join a team working with Front-End Design or Development.
              </p>
              <p>
                Additionally, I have recent experience in server-side development A major goal of mine is to become completely
                proficient in full-stack web development.
              </p>
              <p>
                I welcome any work in these areas. Please explore the rest of my page and examples and I hope to hear from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About