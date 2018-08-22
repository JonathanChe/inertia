import React from 'react';
import Clock from 'react-live-clock';

/**
|--------------------------------------------------
| this will be a pure function that displays the time.
| No props needed here.  
|--------------------------------------------------
*/
const Time = props => {
  return (
    <div id="time">
       <Clock format={'HH:mm'} ticking={true} timezone={'US/Pacific'} />
    </div>
  )
}

export default Time;