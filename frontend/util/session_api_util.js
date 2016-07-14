module.exports = {
  signup: function(user, success, error){
    $.ajax({
      method: 'POST',
      url: '/api/users',
      data: { user },
      success,
      error: function(xhr) {
        const errors = xhr.responseJSON;
        error("signup", errors);}
    });

  },

  login: function(user, success, error) {
    $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user },
    success,
    error: function(xhr) {
      const errors = xhr.responseJSON;
      error("login", errors);}
      }
  );
  },

  logout: function(success) {
    $.ajax({
      method: 'DELETE',
      url: '/api/session',
      success,
      error: function() {
        console.log("Logout error from SessionApiUtil#logout");
      }
    });
  }
};
