import * as React from 'react';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';
import Container from '@material-ui/core/Container';
import TestComponent from './TestComponent';
import ProgressIndicator from './ProgressIndicator';

function Main(props) {
  return (
    <Container>
      <ProgressIndicator />
      <TestComponent />
      <Notifications notifications={props.notifications} />
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications,
  };
}


export default connect(mapStateToProps)(Main);
