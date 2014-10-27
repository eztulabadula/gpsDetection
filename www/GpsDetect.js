var cordova = require('cordova'),
    exec = require('cordova/exec');

var gpsDetect = {
    checkGPS: function(successCallback, failureCallback) {
        cordova.exec(successCallback, failureCallback, 'GpsDetection', 'gpsDetection', []);
    }
};


 module.exports = gpsDetect;