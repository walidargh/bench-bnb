var Store = require('flux/utils').Store,
		AppDispatcher = require('../dispatcher/dispatcher'),
		_benches = {},
		BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
	return Object.assign({}, _benches);
};

window.BenchStore = BenchStore;

module.exports = BenchStore;
