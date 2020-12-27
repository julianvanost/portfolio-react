import React from 'react'
import Pdf from "./GraduationCertificate.pdf";

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
                I enjoy creating content on the web! I have a few years experience in professional front-end web development,
                using HTML, CSS, JavaScript, and JS plugins at a software company called
                <a href={'https://www.exterro.com/'} target="_blank" rel="noopener noreferrer"> Exterro, Inc </a>,
                where I worked on the small team that designed and built the front-end of their latest version 5.0
                application suite. I have currently been practicing by completing freelance projects and furthering
                my education in order to stay up to date on the latest in web development.
                Lately, I have been working with newer technologies and frameworks, such as React.js, Mongo, and Node.js.
                A big goal of mine is to become completely proficient in full-stack web development- as server-side development
                is something that I have more recently learned.
              </p>
              <p>
                At the moment, I have a particular knack for front-end work such as Design, CSS, and DOM manipulation.
                Thus, my current goal is to find work in entry to mid-level Front-End Design or Development.
              </p>
              <p>
                In the long run, I intend on working my hardest on continuing to develop these skills in order to continue my
                career in web design and development.
              </p>
              <p>
                As of April 2020, I am proud say that I have graduated with an A+ average at Univeristy of California Irvine,
                Division of Continuing Education: "Full-Stack Flex Web Development" Coding Bootcamp. Here is a link to my
                <a href={Pdf} target="_blank" rel="noopener noreferrer"> UCI Certificate of Completion </a>
                if you would like to take a look. I have been putting the skills learned there to work more recently on
                personal side projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About