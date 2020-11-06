// Partially Generated Code
import * as React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { testGeneratedCode } from '../actions/NetworkActions.js';
import TextField from '@material-ui/core/TextField';
import MyContainer from './MyContainer';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  // TODO
}));

function TestComponent(props) {
  const classes = useStyles();
  const [text, setText] = React.useState('');

  function handleChange(event) {
    setText(event.target.value);
  };

  function handleClick() {
    props.dispatch(testGeneratedCode(text))
  }

  return (
    <MyContainer>
      <TextField  onChange={handleChange}/>
      <Button className='centerCenter centerText' onClick={handleClick} color="primary" variant="contained">
        Test
      </Button>
    </MyContainer>
  );
}

function mapStateToProps(state) {
  return {
    testOutput: state.NetworkReducer.testOutput,
  };
}
export default connect(mapStateToProps)(TestComponent);
