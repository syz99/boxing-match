import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  container: {
    // display: 'flex',
    flexWrap: 'nowrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '5%'
  },
  address: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '27.5%'
  },
  date: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '12.5%',
    marginTop: 16
  },
  submit: {
    marginTop: 16
  }
});

class Search extends React.Component {
  state = {
    query: '',
    isRenter: true
  }

  handleInputChange = () => {
    this.setState({
      isRenter: !this.state.isRenter
    });
    console.log(this.state.isRenter);
  }

  handleSubmit = () => {}

  render() {
    const {classes} = this.props;
    return (
      this.state.isRenter
      ? <div className={classes.container}>
        <form onSubmit={this.handleSubmit}>
          <TextField label="Location" className={classes.address} variant="outlined" margin="normal" ref={input => this.search += " " + input}/>
          <TextField variant="outlined" className={classes.textField} label="Length" InputProps={{
              startAdornment: <InputAdornment position="start">Feet</InputAdornment>
            }} margin="normal" type="number" ref={input => this.search += " " + input}/>
          <TextField variant="outlined" className={classes.textField} label="Width" InputProps={{
              startAdornment: <InputAdornment position="start">Feet</InputAdornment>
            }} margin="normal" type="number" ref={input => this.search += " " + input}/>
          <TextField className={classes.textField} label="Height" InputProps={{
              startAdornment: <InputAdornment position="start">Feet</InputAdornment>
            }} variant="outlined" margin="normal" type="number" ref={input => this.search += " " + input}/>
          <TextField variant="outlined" label="Start Date" type="date" placeholder="" className={classes.date} InputLabelProps={{
              shrink: true
            }}/>
          <TextField variant="outlined" label="End Date" type="date" placeholder="" className={classes.date} InputLabelProps={{
              shrink: true
            }}/>
          <Button variant="outlined" className={classes.submit} type="submit" color="primary" value="Submit">+ Space</Button>
        </form>
        <FormControlLabel control={<Switch checked = {
            this.state.isRenter
          }
          color = "primary" onChange = {
            this.handleInputChange
          } />
} label="Storagelord"/>

      </div>
      : <div className={classes.container}>
        <form onSubmit={this.handleSubmit}><TextField label="Location" className={classes.address} variant="outlined" margin="normal" ref={input => this.search += " " + input}/>
          <TextField variant="outlined" label="Start Date" type="date" placeholder="" className={classes.date} InputLabelProps={{
              shrink: true
            }}/>
          <TextField variant="outlined" label="End Date" type="date" placeholder="" className={classes.date} InputLabelProps={{
              shrink: true
            }}/>
          <Button variant="outlined" className={classes.submit} type="submit" color="primary" value="Submit">Search</Button>
        </form>
        <FormControlLabel control={<Switch checked = {
            this.state.isRenter
          }
          color = "primary" onChange = {
            this.handleInputChange
          } />
} label="Storagelord"/>
      </div>)

  }
}
Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
