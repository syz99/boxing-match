import React, {Component} from 'react';
import Search from './Search.js';
import logo from './IMG_1039.PNG';
import './App.css';
import Map from './components/Map.js'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appHeader:{
    backgroundColor: ''
  },
  searchBar:{
    marginTop: '16'
  }
});
class App extends Component {
  render() {
    const {classes} = this.props;

    return (<div className="App">
      <header className={classes.appHeader}>
        <Grid container spacing={24}>
          <Grid item>
            <img src={logo} className="App-logo" alt="logo" height={30}/>
          </Grid>
          <Grid item>
            <Search clasName={classes.searchBar}/>
          </Grid>
        </Grid>
      </header>
      <Map />
    </div>);
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(App);
