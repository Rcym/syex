import React from 'react'
import msgStyle from '../msgStyles.module.css'

const DiscussionBottom = () => {
  return (
    <div className={msgStyle.discussionBottom}>
        <input className={msgStyle.msgInput} type="text" placeholder="Écrivez votre message ici..." />
        <div className={msgStyle.msgBtnsDivs}>
          <button className={msgStyle.sendMsgBtn} >Envoyer</button>
          <button className={msgStyle.sendImgBtn}>
            <img className={msgStyle.sendImgIcon} src="/add_img.svg" alt="sendImg" />
          </button>
        </div>
    </div>
  )
}

export default DiscussionBottom