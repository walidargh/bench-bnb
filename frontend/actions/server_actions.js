var AppDispatcher = require('../dispatcher/dispatcher'),
		BenchConstants = require('../constants/bench_constants');

ServerActions = {
  receiveAllBenches: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = ServerActions;
