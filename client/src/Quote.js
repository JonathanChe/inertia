import React from 'react';

const Quote = props => {
  return (
    <div id="quote">
      {props.qotd}
      <br/>
      <br/>
      -{props.qotdAuthor}
    </div>
  )
}

export default Quote;