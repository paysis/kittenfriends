import React, { useState } from 'react'

const ChatMessageInput = ({ onClick, enabled }) => {

    const [message, setMessage] = useState({ content: '', isKitten: false });

    const onChangeMessage = (event) => {
        setMessage({ content: event.target.value, isKitten: false });
    };

    const onSendHandle = () => {
        onClick(message);
        setMessage({ content: '', isKitten: false });
    }

    const onKeyDownHandle = (event) => {
        if(event.key === "Enter"){
            onSendHandle();
        }
    };

  return (
    <form className="pa4 black-80 flex items-center justify-between">
        <div className="w-100 mr3">
            <label htmlFor="msginput" className="f6 b db mb2">Your message</label>
            <textarea disabled={!enabled} onKeyDown={ onKeyDownHandle } value={message.content} onChange={onChangeMessage} id="msginput" name="msginput" className="db w-100 border-box hover-black ba b--black-20 pa2 br2 mb2" aria-describedby="messageinput-desc"></textarea>
            <small id="messageinput-desc" className="f6 black-60">Now is a good time to have a conversation with a kitten!</small>
        </div>
        <a onClick={() => onSendHandle()} className="w3 h3 f5 no-underline black bg-animate hover-bg-black bg-blue hover-white inline-flex items-center pa3 ba border-box br-100">
            <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32">
                <title>sendTheMessage Icon</title>
                <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
            </svg>
        </a>
    </form>
  )
}

export default ChatMessageInput