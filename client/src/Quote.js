import React from 'react';
import PropTypes from 'prop-types';

/**
|--------------------------------------------------
| this will be a pure function that will display the quote of the day. 
|--------------------------------------------------
*/
// qotdAuthor={this.state.qotd.author} qotd={this.state.qotd.body}
const Quote = props => {
  console.log('inside of the quotes function ', props)
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