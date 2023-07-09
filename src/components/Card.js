import React from 'react';
import { useNavigate } from 'react-router-dom'

const Card = ({ name, email, id }) => {
  const navigate = useNavigate();

  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='kittens' src={`https://robohash.org/${id}?set=set4&size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      <a className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-pink"
        onClick={() => navigate(`/chat?id=${encodeURIComponent(id)}&email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`)}>Chat with</a>
    </div>
  );
}

export default Card;
