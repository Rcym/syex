import React from 'react'
import msgStyle from '../msgStyles.module.css'
import ProfileImg from '../../profileImg/ProfileImg'

const MsgElement = ({msgText, sender, senderPic, showSender}) => {

    let msgElementClass = msgStyle.msgElement

    if (sender === "me") {
        msgElementClass += " " + msgStyle.ownMsgElement
    }

    if (!showSender) {
        msgElementClass += " " + msgStyle.msgElementHiddenSender
    }


  return (
    <div className={msgElementClass}>
        <div className={msgStyle.msgSenderPic}>
            {(sender != "me") ? <ProfileImg  size={32} status="offline" imgPath="/Pictures/astronaut.jpg" /> : null}
        </div>
        <div className={msgStyle.msgElementCore}>
            {showSender ? <h4>{sender}</h4> : null}
            <p>{msgText}</p>
        </div>
    </div>
  )
}

export default MsgElement