import React from 'react'
// import { Link } from 'react-router-dom'

const Badges = () => {
  return (
    <div className="row text-center">
      {/*
      <div className='badges' data-iframe-width="150" data-iframe-height="270" data-share-badge-id="668da78b-3c2b-419b-b578-7d52714ef264" data-share-badge-host="https://www.youracclaim.com"></div>
      <div className='badges' data-iframe-width="150" data-iframe-height="270" data-share-badge-id="03b964e9-4e47-4771-a632-fe1925487d5d" data-share-badge-host="https://www.youracclaim.com"></div>
      <div className='badges' data-iframe-width="150" data-iframe-height="270" data-share-badge-id="ae88e3a9-de9a-465b-a44a-87ad57c3ca8e" data-share-badge-host="https://www.youracclaim.com"></div>
      <div className='badges' data-iframe-width="150" data-iframe-height="270" data-share-badge-id="10424109-dd29-46b7-9b22-3eb169860e89" data-share-badge-host="https://www.youracclaim.com"></div>
      <div className='badges' data-iframe-width="150" data-iframe-height="270" data-share-badge-id="24f8f499-bfd6-4a74-8094-5552a9157340" data-share-badge-host="https://www.youracclaim.com"></div>
      */}
      <a className="badgeLinks" target="_blank" rel="noopener noreferrer" href="https://www.youracclaim.com/badges/668da78b-3c2b-419b-b578-7d52714ef264/public_url">
        <img className='badges' src={require("../../images/html-css.png")} alt='Badge - HTML and CSS'></img>
      </a>
      <a className="badgeLinks" target="_blank" rel="noopener noreferrer" href="https://www.youracclaim.com/badges/03b964e9-4e47-4771-a632-fe1925487d5d/public_url">
        <img className='badges' src={require("../../images/javascript-and-jquery.png")} alt='Badge - JavaScript and jQuery'></img>
      </a>
      <a className="badgeLinks" target="_blank" rel="noopener noreferrer" href="https://www.youracclaim.com/badges/ae88e3a9-de9a-465b-a44a-87ad57c3ca8e/public_url">
        <img className='badges' src={require("../../images/node-js-and-express.png")} alt='Badge - Node.js and Express'></img>
      </a>
      <a className="badgeLinks" target="_blank" rel="noopener noreferrer" href="https://www.youracclaim.com/badges/10424109-dd29-46b7-9b22-3eb169860e89/public_url">
        <img className='badges' src={require("../../images/react-js.png")} alt='Badge - React.js'></img>
      </a>
      <a className="badgeLinks" target="_blank" rel="noopener noreferrer" href="https://www.youracclaim.com/badges/24f8f499-bfd6-4a74-8094-5552a9157340/public_url">
        <img className='badges' src={require("../../images/sql-and-nosql-databases.png")} alt='Badge - SQL and NoSQL Databases'></img>
      </a>
    </div>
  )
}

export default Badges