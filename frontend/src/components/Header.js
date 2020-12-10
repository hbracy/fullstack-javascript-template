import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MyContainer from './MyContainer';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    flex: 1,
    flexDirection: 'column',

  },
  toolbarTitle: {
    flex: 1,
  },
  margin: {
    margin: 10,
  }
}));

function Header(props) {
  const classes = useStyles();

  return (
    <MyContainer className={' ' + props.className}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {props.title}
        </Typography>
      </Toolbar>
    </MyContainer>
  );
}

export default Header;
