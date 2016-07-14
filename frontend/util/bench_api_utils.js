module.exports = {
  fetchAllBenches: function(bounds, cb) {
    $.get('api/benches', bounds, cb);
    // $.ajax({
    //   url: 'api/benches',
    //   dataType: 'json',
    //   data: { 'bounds': bounds },
    //   success: function(response) {cb(response);}
    // });
  },

  createBench: function(bench, cb) {
    $.ajax({
      method: 'POST',
      url: 'api/benches',
      data: { bench: bench },
      dataType: 'json',
      success(response) { cb(response);}
    });
  }
};
