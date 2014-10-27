var cordova = require('cordova'),
    exec = require('cordova/exec');

var gpsDetect = {
    checkGPS: function(successCallback, failureCallback) {
        exec(successCallback, failureCallback, 'GpsDetection', 'gpsDetection', []);
    }
};
var gpsDetect = new gpsDetect();
module.exports = gpsDetect;