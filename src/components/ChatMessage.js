import React from 'react'
import ChatAvatar from './ChatAvatar'

const ChatMessage = ({ content, isKitten }) => {
  return (
    <div className={`flex flex-column ${isKitten ? "items-start" : "items-end"}`}>
        <div className={`${isKitten ? "bg-light-pink" : "bg-green"} dib pa2 ma2 mw-50`}>
            {content}
        </div>
    </div>
  )
}

export default ChatMessage