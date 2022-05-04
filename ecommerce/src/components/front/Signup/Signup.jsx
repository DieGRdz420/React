import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className='signupPage' >
      <div className="inputsContent">

        <div className="titleInput-content">
          <label htmlFor="titleInput">Title</label>
          <input type="text" className="titleInput" />
        </div>

        <div className="titleInput-content">
          <label htmlFor="genderInput">Gender</label>
          <input type="text" className="genderInput" />
        </div>

        <div className="titleInput-content">
          <label htmlFor="imageLinkInput">Image Link</label>
          <input type="text" className="imageLinkInput" />
        </div>

        <div className="titleInput-content">
          <label htmlFor="musicLinkInput">Music Link</label>
          <input type="text" className="musicLinkInput" />
        </div>

      </div>

      <div className="buttonContent"> <button>✔️</button> </div>
    </div>
  )
}

export default Signup;