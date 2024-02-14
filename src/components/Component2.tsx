import React from 'react'
import avatar4 from "../assets/avatar-4.jpg"
import avatar3 from "../assets/avatar-3.jpg"
//import "./styles.css"

const Component2: React.FC = () => {
  return (
    <div className="chat-container">
        <div className="post-header">
          <ul>
          <li className="send">Close</li>
          <li>Send to</li>
          </ul>
        </div>
        <div className="chat-box">
            <div className="post-page">
                <div className="post">
                    <img src={avatar3} alt="Post Image" />
                    <span className="post-text">Na Who We Sabi, We Go Greet 😂😂😂</span>
                </div>
            <span className="name">Nyenyee Ochuba</span>
            </div>
            <div className="post-bottom">
                <div className="write">
                    <img src={avatar3} alt="Post Image" />
                    <p>Write a message</p>
                </div>
                <input type="text" placeholder="Search" />
            </div>
        </div>
        <div className="userinfo">
            <div className="users">
                <img src={avatar4} alt="Image" />
                <p className="username">Wole Awosika</p>
                <button className="button">send</button>
            </div>
            <div className="users">
                <img src={avatar4} alt="Image" />
                <p className="username">Wole Awosika</p>
                <button className="button">send</button>
            </div>
            <div className="users">
                <img src={avatar4} alt="Image" />
                <p className="username">Wole Awosika</p>
                <button className="button">send</button>
            </div>
            <div className="users">
                <img src={avatar4} alt="Image" />
                <p className="username">Wole Awosika</p>
                <button className="button">send</button>
            </div>

        </div>
    </div>
  )
}

export default Component2