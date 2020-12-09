
import React from 'react'
import Badges from './Badges'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="page-header">
          <h1>Home</h1>
        </div>
        <div className="row spiel">
          <div className="col-md-3">
            <img src={require("../../images/profilePicture.jpg")} alt="Julian Van Ost Profile" className="img-thumbnail"></img>
          </div>
          <div className="col-md-9">
            <p>
              Greetings and Welcome to my new page! My name is Julian and I hope you enjoy the content on this site which includes some example projects, my resume, and a link to my certificate of completion for University of California, Irvine's Full-Stack Flex Web Development Bootcamp.
              </p>
            <p>
              Below are some badges that I have earned while continuing my education in Web Development.
              </p>
          </div>
        </div>
      </div>
      <footer>
        <Badges/>
      </footer>
    </div>
  )
}
export default Home