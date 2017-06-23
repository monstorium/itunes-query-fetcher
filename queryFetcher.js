const request = require('request');

var queryFetcher = (term, media, entity, callback) => {
	request({
		url: `https://itunes.apple.com/search?term=${term}&media=${media}&entity=${entity}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback("Unable to connect to Itunes Search API!");
		} else if (body.status === 'ZERO_RESULTS') {
			callback("No results exist for that query.");
		} else if (body.status === 'OK') {
			callback(null, body);
		} else {
			console.log(body);
		}
	});
};


module.exports.queryFetcher = queryFetcher;