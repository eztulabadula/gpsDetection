var cordova = require('cordova'),
    exec = require('cordova/exec');

var gpsDetect2 = {
    checkGPS: function(successCallback, failureCallback) {
        exec(successCallback, failureCallback, 'GpsDetection', 'gpsDetection', []);
    }
};
var gpsDetect = new gpsDetect2();
module.exports = gpsDetect;