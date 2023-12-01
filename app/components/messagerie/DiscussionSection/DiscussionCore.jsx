import React from 'react'
import msgStyle from '../msgStyles.module.css'
import MsgElement from './MsgElement.jsx'

const DiscussionCore = () => {

  const messages = [
    {index:1, msgText: "Hello", sender: "me", senderPic: "/Pictures/astronaut.jpg"},
    {index:2, msgText: "Hi", sender: "john john", senderPic: "/Pictures/astronaut.jpg"},
    {index:3, msgText: "How are you?", sender: "me", senderPic: "/Pictures/astronaut.jpg"},
    {index:4, msgText: "How are you?", sender: "me", senderPic: "/Pictures/astronaut.jpg"},
    {index:5, msgText: "Fine, and you?", sender: "john john", senderPic: "/Pictures/astronaut.jpg"},
    {index:6, msgText: "Fine, and you?", sender: "john john", senderPic: "/Pictures/astronaut.jpg"},
    {index:7, msgText: "Fine too", sender: "me", senderPic: "/Pictures/astronaut.jpg"},
    {index:8, msgText: "Bye", sender: "john john", senderPic: "/Pictures/astronaut.jpg"},
    {index:9, msgText: "Bye", sender: "me", senderPic: "/Pictures/astronaut.jpg"},
  ]

  return (
    <div className={msgStyle.discussionCore}>
        {messages.map(({msgText, sender, senderPic , index}) => {

          let previousMsg = index > 1 ? messages.find(message => message.index === index-1 ) : false
          let showSender = !previousMsg || previousMsg.sender !== sender

          return (
            <MsgElement key={index} showSender={showSender} msgText={msgText} sender={sender} senderPic={senderPic} />
          )
        })}
    </div>
  )
}

export default DiscussionCore