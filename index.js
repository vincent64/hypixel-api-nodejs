var request = require('request');
var responseData;

	exports.getPlayerByName = function(key, ign) {
		var apiUrl = "https://api.hypixel.net/player?key=" + key + "&name=" + ign;
		request({
    	url: apiUrl,
    	json: true
		}, function (error, response, body) {
			responseData  = body;
		});

		return responseData;
	}

	exports.getPlayerByUuid = function(key, uuid) {
		var apiUrl = "https://api.hypixel.net/player?key=" + key + "&uuid=" + uuid;
		request({
    	url: apiUrl,
    	json: true
		}, function (error, response, body) {
			responseData = body;
		});

		return responseData;
	}

	exports.getGuildByName = function(key, name) {
		var apiUrl = "https://api.hypixel.net/guild?key=" + key + "&name=" + name;
		request({
    	url: apiUrl,
    	json: true
		}, function (error, response, body) {
			responseData = body;
		});

		return responseData;
	}

	exports.getGuildByPlayer = function(key, player) {
		var apiUrl = "https://api.hypixel.net/guild?key=" + key + "&player=" + player;
		request({
    	url: apiUrl,
    	json: true
		}, function (error, response, body) {
			responseData = body;
		});

		return responseData;
	}

	exports.getGuildById = function(key, id) {
		var apiUrl = "https://api.hypixel.net/guild?key=" + key + "&player=" + id;
		request({
    	url: apiUrl,
    	json: true
		}, function (error, response, body) {
			responseData = body;
		});

		return responseData;
	}

	exports.getFriendsByUuid = function(key, uuid) {
		var apiUrl = "https://api.hypixel.net/friends?key=" + key + "&player=" + uuid;
		request({
    	url: apiUrl,
    	json: true
		}, function (error, response, body) {
			responseData = body;
		});

		return responseData;
	}

	exports.getFriendsByName = function(key, ign) {
		var apiUrl = "https://api.hypixel.net/friends?key=" + key + "&player=" + ign;
		request({
    	url: apiUrl,
    	json: true
		}, function (error, response, body) {
			responseData = body;
		});

		return responseData;
	}

	exports.getKeyInformations = function(key) {
		var apiUrl = "https://api.hypixel.net/key?key=" + key;
		request({
    	url: apiUrl,
    	json: true
		}, function (error, response, body) {
			responseData = body;
		});

		return responseData;
	}

	exports.getSession = function(key, uuid) {
		var apiUrl = "https://api.hypixel.net/session?key=" + key + "&uuid=" + uuid;
		request({
    	url: apiUrl,
    	json: true
		}, function (error, response, body) {
			responseData = body;
		});

		return responseData;
	}

	exports.getLeaderboards = function(key) {
		var apiUrl = "https://api.hypixel.net/leaderboards?key=" + key;
		request({
    	url: apiUrl,
    	json: true
		}, function (error, response, body) {
			responseData = body;
		});

		return responseData;
	}

	exports.getBoosters = function(key) {
		var apiUrl = "https://api.hypixel.net/booster?key=" + key;
		request({
    	url: apiUrl,
    	json: true
		}, function (error, response, body) {
			responseData = body;
		});

		return responseData;
	}