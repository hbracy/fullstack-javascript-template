import * as React from 'react';
import { store } from '../components/App.js';
import axios from 'axios';
import Notifications from 'react-notification-system-redux';

export const SET_SOMETHING_STATE = 'SET_SOMETHING_STATE';
// Partially Generated Code
export const TEST_GENERATED_CODE = 'TEST_GENERATED_CODE';
export const TEST_GENERATED_CODE_COMPLETED = 'TEST_GENERATED_CODE_COMPLETED';
export const TEST_GENERATED_CODE_FAILED = 'TEST_GENERATED_CODE_FAILED';
// Partially Generated Code
export const TEST_GENERATED_CODE2 = 'TEST_GENERATED_CODE2';
export const TEST_GENERATED_CODE2_COMPLETED = 'TEST_GENERATED_CODE2_COMPLETED';
export const TEST_GENERATED_CODE2_FAILED = 'TEST_GENERATED_CODE2_FAILED';

// Partially Generated Code
export const TEST_GENERATED_CODE3 = 'TEST_GENERATED_CODE3';
export const TEST_GENERATED_CODE3_COMPLETED = 'TEST_GENERATED_CODE3_COMPLETED';
export const TEST_GENERATED_CODE3_FAILED = 'TEST_GENERATED_CODE3_FAILED';

// Constants set above

export function setSomethingState(param1, param2) {
// headers: {
//     'Authorization': 'Bearer' + authToken
//   }
  return async (dispatch) => {
    store.dispatch({
      type: SET_SOMETHING_STATE,
    })
    axios.post(process.env.URL + '/setSomething', {
      param1: param1,
      param2: param2
    }).then(response => {
      console.log('SET SOMETHING RESPONSE', response.data);
      if (response.data) {
        console.log('SET SOMETHING RESPONSE', response.data);
        // localStorage.setItem('jwtToken', response.data.authToken); to cache
        store.dispatch({
          type: SET_SOMETHING_STATE,

        });

       } else {
        alert(email + ' failed to login');
      }
    }).catch(err => console.error(err));

  }
}
// Partially Generated Code
export function testGeneratedCode(param1, param2) {
  // console.log('Calling action function with params', param1, param2);
  
  // TODO
  // Example:
  const testData = {
    param1: param1,
    param2: param2
  }

  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }

  return async (dispatch) => { 
    store.dispatch({
      type: TEST_GENERATED_CODE
    });

    axios.post(process.env.REACT_APP_URL + '/testGeneratedCode', testData, options).then(response => {
      // console.log('RECIEVED MESSAGE FROM', '/testGeneratedCode', testOutput)
      let testOutput = response.data;
      if (testOutput) {
        store.dispatch({
          type: TEST_GENERATED_CODE_COMPLETED,
          testOutput
        });
      } else {
        const notificationOpts = {
          title: 'ERROR',
          message: 'testGeneratedCode Network function gave error',
          position: 'tc',
          autoDismiss: 3,
        };

        store.dispatch({
          type: TEST_GENERATED_CODE_FAILED,
        });

        store.dispatch(Notifications.error(notificationOpts));
      }
    }).catch(err => {
      console.error(err)
      const notificationOpts = {
        title: 'ERROR',
        message: 'testGeneratedCode Network request failed',
        position: 'tr',
        autoDismiss: 3,
      };
      store.dispatch({
        type: TEST_GENERATED_CODE_FAILED,
      });
      store.dispatch(Notifications.error(notificationOpts));
    });;
  }
}


// Partially Generated Code
export function testGeneratedCode2(param1, param2) {
  // console.log('Calling action function with params', param1, param2);
  
  // TODO
  // Example:
  const testData = {
    param1: param1,
    param2: param2
  }

  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }

  return async (dispatch) => { 
    store.dispatch({
      type: TEST_GENERATED_CODE2
    });

    axios.post(process.env.REACT_APP_URL + '/testGeneratedCode2', testData, options).then(response => {
      // console.log('RECIEVED MESSAGE FROM', '/testGeneratedCode2', testOutpDut)
      let testOutpDut = response.data;
      if (testOutpDut) {
        store.dispatch({
          type: TEST_GENERATED_CODE2_COMPLETED,
          testOutpDut
        });
      } else {
        const notificationOpts = {
          title: 'ERROR',
          message: 'testGeneratedCode2 Network function gave error',
          position: 'tc',
          autoDismiss: 3,
        };

        store.dispatch({
          type: TEST_GENERATED_CODE2_FAILED,
        });

        store.dispatch(Notifications.error(notificationOpts));
      }
    }).catch(err => {
      console.error(err)
      const notificationOpts = {
        title: 'ERROR',
        message: 'testGeneratedCode2 Network request failed',
        position: 'tc',
        autoDismiss: 3,
      };
      store.dispatch({
        type: TEST_GENERATED_CODE2_FAILED,
      });
      store.dispatch(Notifications.error(notificationOpts));
    });;
  }
}

// Partially Generated Code
export function testGeneratedCode3(param1, param2) {
  // console.log('Calling action function with params', param1, param2);
  
  // TODO
  // Example:
  const testData = {
    param1: param1,
    param2: param2
  }

  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }

  return async (dispatch) => { 
    store.dispatch({
      type: TEST_GENERATED_CODE3
    });

    axios.post(process.env.REACT_APP_URL + '/testGeneratedCode3', testData, options).then(response => {
      // console.log('RECIEVED MESSAGE FROM', '/testGeneratedCode3', testOutput)
      let testOutput = response.data;
      if (testOutput) {
        store.dispatch({
          type: TEST_GENERATED_CODE3_COMPLETED,
          testOutput
        });
      } else {
        const notificationOpts = {
          title: 'ERROR',
          message: 'testGeneratedCode3 Network function gave error',
          position: 'tc',
          autoDismiss: 3,
        };

        store.dispatch({
          type: TEST_GENERATED_CODE3_FAILED,
        });

        store.dispatch(Notifications.error(notificationOpts));
      }
    }).catch(err => {
      console.error(err)
      const notificationOpts = {
        title: 'ERROR',
        message: 'testGeneratedCode3 Network request failed',
        position: 'tc',
        autoDismiss: 3,
      };
      store.dispatch({
        type: TEST_GENERATED_CODE3_FAILED,
      });
      store.dispatch(Notifications.error(notificationOpts));
    });;
  }
}

