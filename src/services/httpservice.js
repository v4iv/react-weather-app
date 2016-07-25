/**
 * Created by Vaibhav Sharma on 7/23/2016.
 */
var Fetch = require('whatwg-fetch');
var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?';
var appId = '&appid=d7a1b792ef0762288a280388adc61856';

var service = {
    get: function (url) {
        return fetch(baseUrl + url + appId).then(function (response) {
            return response.json();
        });
    }
};

module.exports = service;
