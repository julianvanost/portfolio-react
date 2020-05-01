import React from 'react'
import Pdf from "./GraduationCertificate.pdf";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="page-header">
            <h1>About Me</h1>
          </div>
          <div className="row">
            <p>
              I have professional experience in front-end web development, using HTML, CSS, jQuery, and more, but most of my
              experience in previous jobs pertained to a tech stacks that were outdated by at least a few years. I am
              currently working on catching up on the latest in web development and mastering the newer technologies and the newer
              frameworks. Another goal is to become completely proficient in full-stack web development, as this is a newer skill I have recently acquired.
            </p>
            <p>
              In the long run, I intend on working my hardest on continuing to develop these skills in order to continue my
              career in web design and development. I particulary have a knack for front-end work such as Design, CSS, and DOM manipulation; thus, my goal is to find work in Front-End Development.
            </p>
            <p>
              As of April 2020, I am proud to have graduated with an A+ average at the esteemed Univeristy of California Irvine, Division of continuing Education: "Full-Stack Flex Web Development" Bootcamp.
            </p>
            <p>
              <a href={Pdf} target="_blank" rel="noopener noreferrer">UCI Certificate of Completion</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About