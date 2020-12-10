import * as React from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';
import MyContainer from './MyContainer';
import TestComponent from './TestComponent';
import ProgressIndicator from './ProgressIndicator';

function Main(props) {
  return (
    <MyContainer className={' ' + props.className}>
      <TestComponent />
      <Notifications notifications={props.notifications} />
    </MyContainer>
  );
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications,
  };
}


export default connect(mapStateToProps)(Main);
