import React from 'react'
import avatar from "../assets/avatar-2.png"
import avatar2 from "../assets/avatar-5.jpg"
import avatar3 from "../assets/avatar-3.jpg"
import avatar4 from "../assets/avatar-4.jpg"
import avatar5 from "../assets/avatar-6.jpg"
import messenger from "../assets/messenger-icon.jpg"
import whatsapp from "../assets/whatsapp-icon.jpg"
import link from "../assets/images (1).png"
import group from "../assets/share 1.jpg"

interface Component1Props {
  showComponent2: boolean,
  setShowComponent2: React.Dispatch<React.SetStateAction<boolean>>
}


const Component1: React.FC<Component1Props> = ({showComponent2, setShowComponent2}) => {
  const handleSendClick = () => {
    setShowComponent2(!showComponent2)
  }
  return (
    <div >
      <div className='profile-container'>
        <div className="profile">
          <img src={avatar} alt="Profile" className="profile-image" />
          <div className="profile-name">Olufemi Shield</div>
        </div>
        <div className="post-options">
          <div className="post-option">
            <img src="feed-icon.png" alt="Feed icon" className="post-option-icon" />
            <div className="post-option-text">Feed</div>
          </div>
          <div className="post-option">
            <img src="public-icon.png" alt="Public icon" className="post-option-icon" />
            <div className="post-option-text">Public</div>
          </div>
        </div>
        <div className="post-caption">
          <input type="text" placeholder="Say something about this..." className="post-caption-input" />
        </div>
        <button className="post-button">Share now</button>
      </div>  
      <div className='secondary-container'>
        <div className="messenger-option">
          <div className="messenger-option-title" style={{paddingTop: "5px"}} onClick={handleSendClick}>Send in Messenger</div>
          <div className="messenger-option-contacts">
            <div className="messenger-option-contact">
              <img src={avatar3} alt="Contact 1" className="messenger-option-contact-image" />
              <div className="messenger-option-contact-name">Owomoyela Oluwayan...</div>
            </div>
            <div className="messenger-option-contact">
              <img src={avatar4} alt="Contact 2" className="messenger-option-contact-image" />
              <div className="messenger-option-contact-name">Augustine Oludare</div>
            </div>
            <div className="messenger-option-contact">
              <img src={avatar5} alt="Contact 3" className="messenger-option-contact-image" />
              <div className="messenger-option-contact-name">Olatoye Oluwaseun...</div>
            </div>
            <div className="messenger-option-contact">
              <img src={avatar2} alt="Contact 4" className="messenger-option-contact-image" />
              <div className="messenger-option-contact-name">Emy Godfrey</div>
            </div>
          </div>
        </div>
        <div className="messenger-option-title" style={{paddingLeft: "13px"}}>Share to</div>
        <div className="share-options">
          <div className="share-option">
            <img src={messenger} alt="Message icon" className="share-option-icon" />
            <div className="share-option-text">Message</div>
          </div>
          <div className="share-option">
            <img src={whatsapp} alt="WhatsApp icon" className="share-option-icon" />
            <div className="share-option-text">WhatsApp</div>
          </div>
          <div className="share-option">
            <img src={group} alt="Group icon" className="share-option-icon" />
            <div className="share-option-text">Group</div>
          </div>
          <div className="share-option">
            <img src={link} alt="Copy link icon" className="share-option-icon" />
            <div className="share-option-text">Copy link</div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Component1