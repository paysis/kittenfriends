import React from 'react'

const Avatar = ({ id }) => {
  return (
    <div className="pa4 tc">
        <img
            src={`https://robohash.org/${id}?set=set4&size=200x200`}
            className="br-100 ba h3 w3 dib"
            alt="kitten's avatar" 
        />
    </div>

  )
}

export default Avatar