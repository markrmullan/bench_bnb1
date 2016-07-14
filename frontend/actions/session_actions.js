const SessionApiUtil = require('./../util/session_api_util');
const Dispatcher = require('./../dispatcher/dispatcher');
const SessionConstants = require('./../constants/session_constants');
const hashHistory = require('react-router').hashHistory;

module.exports = {
  signup: function(formData){
    SessionApiUtil.signup(formData, this.receiveCurrentUser);
  },

  login: function(formData) {
    SessionApiUtil(formData, this.receiveCurrentUser);
  },

  logout: function() {
    SessionApiUtil.logout(this.removeCurrentUser);
  },

  receiveCurrentUser: function(user){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      user: user
    });
  },

  removeCurrentUser: function(){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    hashHistory.push('/login');
  }
};
