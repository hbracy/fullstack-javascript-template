import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function ProgressIndicator(props) {
  const classes = useStyles();

  return (
    <div>
      { !props.isInProgress && <div className='fourPixelHeight'></div> }
      <div className={classes.root}>
        { props.isInProgress && <LinearProgress /> }
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isInProgress: state.NetworkReducer.isInProgress,
  };
}
export default connect(mapStateToProps)(ProgressIndicator);
