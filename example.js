const request = require('request');
const queryFetcher = require('./queryFetcher');
const fs = require('fs');

var term = "inception";
var media = "movie";
var entity = "movie";

queryFetcher.queryFetcher("inception", "movie", "movie", (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results);
	}
});