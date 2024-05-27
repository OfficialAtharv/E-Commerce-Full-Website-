import React, { useState } from "react";
import './contact.css'
const Contact = () => {
  const [user,setUser] = useState({
    Name:'', email:'', subject:'', Message:''
  })
  // let values ,names
  const data = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const send = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const { Name, email, subject, Message } = user;
    const option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name,
        email,
        subject,
        Message
      })
    };
    const response = await fetch(
      'https://e-commerece-26aba-default-rtdb.firebaseio.com/Message.json',
      option
    );
    if (response.ok) {
      alert("Message sent");
    } else {
      alert("Error Occurred");
    }
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="form">
            <h2># Contact Us</h2>
            <form method="POST">
              <div className="box">
                <div className="label">
                  <h4>Name</h4>
                </div>
                <div className="input">
                  <input type="text" placeholder="Name "value={user.Name}name="Name" onChange={data} ></input>
                </div>
              </div>
              <div className="box">
                <div className="label">
                  <h4>E-Mail</h4>
                </div>
                <div className="input">
                  <input type="text" placeholder="E-Mail"value={user.email}name="email" onChange={data} ></input>
                </div>
              </div>
              <div className="box">
                <div className="label">
                  <h4>Subject</h4>
                </div>
                <div className="input">
                  <input type="text" placeholder="Subject"value={user.subject}name="subject"  onChange={data}></input>
                </div>
              </div>
              <div className="box">
                <div className="label">
                  <h4>Message</h4>
                </div>
                <div className="input">
                  <textarea type='text' placeholder="Message !" name="Message" value={user.Message} onChange={data}></textarea>
                </div>
              </div>
              <button type="submit" onClick={send}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
