
var ServerActions = require('../actions/server_actions');

var ApiUtil = {
	fetchBenches: function() {
    $.ajax({
      url: '/api/benches',
      method: 'GET',
      dataType: 'json',
      success: function(benches) {
        ServerActions.receiveAllBenches(benches);
      }
		});
	}
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
