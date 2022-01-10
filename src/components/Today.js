import React from 'react';

const Today = () => {
  const date = new Date();
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return (
    <div className="date">
      <p>{date.toLocaleDateString('en-GB', options)}</p>
    </div>
  );
};

export default Today;
