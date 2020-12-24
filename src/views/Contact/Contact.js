import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [result, setResult] = useState(null);

  const sendEmail = event => {
    event.preventDefault();
    axios
      .post('/send', { ...state })
      .then(response => {
        setResult(response.data);
        setState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Whoops! Something went wrong. Try again later.'
        });
      });
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <main>
      <div>
        {result && (
          <p className={`${result.success ? 'success' : 'error'} text-center text-danger`}>
            {result.message}
          </p>
        )}
        <form onSubmit={sendEmail}>
          <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={state.name}
              placeholder="Enter your full name"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={state.email}
              placeholder="Enter your email"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              value={state.subject}
              placeholder="Enter subject"
              onChange={onInputChange}
            />
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={state.message}
              rows="3"
              placeholder="Enter your message"
              onChange={onInputChange}
            />
          </Form.Group>
          <Button variant="primary" className="btn-submit" type="submit">
            Submit
        </Button>
        </form>
      </div>
    </main>
  )
}

export default Contact;



// import React, { useState, useEffect } from 'react'

// const Contact = () => {
//   //must bring in useState in order to have a state in React hooks
//   //useState returns an array, first being what is in the state, second being a function
//   //to access count, syntax woould be countState.count
//   //instead of setState, the function is now called setCountState
//   const [countState, setCountState] = useState({
//     username: '',
//     email: '',
//     message: '',
//     usernameInput: '',
//     messageInput: '',
//     emailInput: '',
//   })

//   const handleInputChange = event => {
//     setCountState({ ...countState, [event.target.name]: event.target.value })
//   }
//   const handleSubmit = event => {
//     event.preventDefault()
//     setCountState({ ...countState, username: countState.usernameInput, email: countState.emailInput, message: countState.messageInput, usernameInput: '', emailInput: '', messageInput: '' })
//   }
//   useEffect(() => {
//   }, [countState.usernameInput])

//   return (
//     <main className="container mainStyle">
//       <div className="row">
//         <h1 className="heading col-12">
//           Contact
//         </h1>
//         <div className="col-12">
//           <form>
//             <div className="row">
//               <div className="form-group col">
//                 <label htmlFor="formGroupExampleInput">Name</label>
//                 <input
//                   className="form-control"
//                   id="formGroupExampleInput"
//                   onChange={handleInputChange}
//                   type="text"
//                   name="usernameInput"
//                   value={countState.usernameInput}
//                   placeholder='Name'
//                 ></input>
//               </div>
//               <div className="form-group col">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   className="form-control"
//                   id="email"
//                   onChange={handleInputChange}
//                   type="text"
//                   name="emailInput"
//                   value={countState.emailInput}
//                   placeholder="example@gmail.com"
//                 ></input>
//               </div>
//             </div>
//             <div className="row">
//               <div className="form-group">
//                 <label
//                   htmlFor="message">Message</label>
//                 <textarea
//                   className="form-control"
//                   onChange={handleInputChange}
//                   id="message"
//                   type='text'
//                   name="messageInput"
//                   value={countState.messageInput}
//                   rows="3"
//                   placeholder="Enter your message here"
//                 ></textarea>
//               </div>
//               <br></br>
//               <button className='btn btn-outline-primary btn-waves-effect float-right-custom'
//                 onClick={handleSubmit}
//               >Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </main>
//   )
// }

// export default Contact


