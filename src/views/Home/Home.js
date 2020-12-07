
import React from 'react'
// import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="page-header">
          <h1>Home</h1>
        </div>
        <div class="row spiel">
          <div class="col-md-3">
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
        <div className="row text-center">
          <div className='badges' data-iframe-width="150" data-iframe-height="270" data-share-badge-id="668da78b-3c2b-419b-b578-7d52714ef264" data-share-badge-host="https://www.youracclaim.com"></div>
          <div className='badges' data-iframe-width="150" data-iframe-height="270" data-share-badge-id="03b964e9-4e47-4771-a632-fe1925487d5d" data-share-badge-host="https://www.youracclaim.com"></div>
          <div className='badges' data-iframe-width="150" data-iframe-height="270" data-share-badge-id="ae88e3a9-de9a-465b-a44a-87ad57c3ca8e" data-share-badge-host="https://www.youracclaim.com"></div>
          <div className='badges' data-iframe-width="150" data-iframe-height="270" data-share-badge-id="10424109-dd29-46b7-9b22-3eb169860e89" data-share-badge-host="https://www.youracclaim.com"></div>
          <div className='badges' data-iframe-width="150" data-iframe-height="270" data-share-badge-id="24f8f499-bfd6-4a74-8094-5552a9157340" data-share-badge-host="https://www.youracclaim.com"></div>
        </div>
      </footer>
    </div>
    // <div class="row spiel">
    //   <div class="col-md-3">
    //     <img src="/portfolio-react/static/media/profilePicture.0be9b6c2.jpg" alt="Julian Van Ost Profile" class="img-thumbnail">
    //       </div>
    //       <div class="col-md-9">
    //         <p>Greetings and Welcome to my new page! My name is Julian and I hope you enjoy the content on this site which includes some example projects, my resume, and a link to my certificate of completion for University of California, Irvine's Full-Stack Flex Web Development Bootcamp.</p><p>Below are some badges that I have earned while continuing my education in Web Development.</p></div></div>

  )
}
export default Home