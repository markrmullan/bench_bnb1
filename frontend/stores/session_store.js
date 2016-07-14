const Store = require('flux/utils').Store;
const Dispatcher = require('./../dispatcher/dispatcher');
const SessionConstants = require('./../constants/session_constants');

const SessionStore = new Store(Dispatcher);

let _currentUser = {};

SessionStore._login = function(user){
  _currentUser = {};
  _currentUser[user.username] = user;
  this.__emitChange();
};

SessionStore._logout = function(){
  _currentUser = {};
  this.__emitChange();
};

SessionStore.currentUser = function(){
  return _currentUser;
};

SessionStore.isUserLoggedIn = function(){
  return Object.keys(_currentUser).length === 1;
};

SessionStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
      this.login(payload.user);
      break;
    case SessionConstants.LOGOUT:
      this.logout();
      break;
  }
};
