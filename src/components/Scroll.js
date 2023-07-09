import React from 'react';

const Scroll = (props) => {
  const heightSpec = props.height || '50vh';
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: heightSpec}}>
      {props.children}
    </div>
  );
};

export default Scroll;