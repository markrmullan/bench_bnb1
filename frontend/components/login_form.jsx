const React = require('react');
const SessionActions = require('./../actions/session_actions');
const SessionStore = require('./../stores/session_store');

const LoginForm = React.createClass({
  render() {
    return (
    <form onSubmit={SessionActions.login}>
      <label>Username: </label>
      <input type="text"></input>
      <br/> <br/>

      <label>Password: </label>
      <input type="text"></input>
      <br/> <br/>

      <input type="submit" />
    </form>);
  },

  componentDidMount(){
    SessionStore.addListener(this._onChange);
  },

  _onChange(){
    this.setState({
      current_user: "test"
    });
  }


});

module.exports = LoginForm;
