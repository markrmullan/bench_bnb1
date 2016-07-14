const Store = require('flux/utils').Store;
const Dispatcher = require('./../dispatcher/dispatcher');
const BenchConstants = require ('./../constants/bench_constants');
const BenchStore = new Store(Dispatcher);
let _benches = {};

BenchStore.all = function() {
  return _benches;
};

BenchStore.resetAllBenches = function(benches) {
  _benches = benches;
  this.__emitChange();
};

BenchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
    BenchStore.resetAllBenches(payload.benches);
    break;

    case BenchConstants.BENCH_CREATED:
    _benches[payload.bench.id] = payload.bench;
    this.__emitChange();
    break;
  }
};


module.exports = BenchStore;

window.BenchStore = BenchStore;
