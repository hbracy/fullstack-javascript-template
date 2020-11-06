import * as React from 'react';
import { store } from '../components/App.js';
import axios from 'axios';
import Notifications from 'react-notification-system-redux';

// Partially Generated Code
export const TEST_GENERATED_CODE = 'TEST_GENERATED_CODE';
export const TEST_GENERATED_CODE_COMPLETED = 'TEST_GENERATED_CODE_COMPLETED';
export const TEST_GENERATED_CODE_FAILED = 'TEST_GENERATED_CODE_FAILED';

// Constants set above

// Partially Generated Code
export function testGeneratedCode(param1, param2) {
  // console.log('Calling action function with params', param1, param2);
  
  // TODO
  // Example:
  const inputData = {
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

    axios.post(process.env.REACT_APP_URL + '/testGeneratedCode', inputData, options).then(response => {
      // console.log('RECIEVED MESSAGE FROM', '/testGeneratedCode', outputData)
      let outputData = response.data;
      if (outputData) {
        store.dispatch({
          type: TEST_GENERATED_CODE_COMPLETED,
          outputData
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
        position: 'tc',
        autoDismiss: 3,
      };
      store.dispatch({
        type: TEST_GENERATED_CODE_FAILED,
      });
      store.dispatch(Notifications.error(notificationOpts));
    });;
  }
}

