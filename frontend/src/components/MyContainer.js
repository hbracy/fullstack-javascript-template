import * as React from 'react';

// import { styles } from '../styles/style.js'


export default function MyContainer(props) {
  return (
    //Maybe need noPointerEvents
      <div className={'full container1 flexRow centerCenter hiddenOverflow ' + props.className}>
        {props.children}
      </div>
  );
}
