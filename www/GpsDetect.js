var cordova = require('cordova'),
    exec = require('cordova/exec');

function GpsDetect(){};
GpsDetect.prototype.checkGPS = function(successCallback, failureCallback) {
    console.log("hunastaño");
        exec(successCallback, failureCallback, 'GpsDetection', 'gpsDetection', []);
    }
var gpsDetect = new GpsDetect();
module.exports = gpsDetect;