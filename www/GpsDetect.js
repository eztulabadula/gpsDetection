var cordova = require('cordova'),
    exec = require('cordova/exec');

var gpsDetect = function() {
    checkGPS = function(successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, 'GpsDetection', 'gpsDetection', []);
    };
};


 module.exports = gpsDetect;