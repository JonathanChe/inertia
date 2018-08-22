import React from 'react';
import Clock from 'react-live-clock';

const Time = props => {
  return (
    <div id="time">
      <Clock format={'HH:mm'} ticking={true} timezone={'US/Pacific'} />
    </div>
  )
}

export default Time;