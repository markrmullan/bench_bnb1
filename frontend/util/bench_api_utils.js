module.exports = {
  fetchAllBenches: function(bounds, cb) {
    $.get('api/benches', bounds, cb);
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
