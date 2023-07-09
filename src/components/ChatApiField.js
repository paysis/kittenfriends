import React, { useState } from 'react'

const ChatApiField = () => {

    const [apiKey, setApiKey] = useState(localStorage.getItem('apiKey') || '');

    const handleChange = (event) => {
        setApiKey(event.target.value)
        localStorage.setItem('apiKey', event.target.value)
    }

  return (
    <form className="pa4 georgia green">
        <div className="measure">
            <label htmlFor="apikey" className="f6 b db mb2">OpenAI API Key <span className="normal red">(required)</span></label>
            <input onChange={handleChange} value={apiKey} id="apikey" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" aria-describedby="apikey-desc" />
            <small id="apikey-desc" className="f6 db mb2">Please enter your OpenAI API key to use chat feature.</small>
        </div>
    </form>

  )
}

export default ChatApiField