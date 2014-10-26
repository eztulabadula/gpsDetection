cordova.define('cordova/plugin/GpsDetection', function(require, exports, module) {
    var exec = require('cordova/exec');

    var gpsDetect = function() {};

    gpsDetect.prototype.checkGPS = function(successCallback, failureCallback) {
    	exec(successCallback, failureCallback, 'GpsDetection', 'gpsDetection', []);
    };
    
    var gpsDetect = new gpsDetect();
    module.exports = gpsDetect;
});