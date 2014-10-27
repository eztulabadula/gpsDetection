Gps detection plugin
====================

##Usage

cordova plugin add https://github.com/kklrd/gpsDetection.git


```
var success = function(result){
    alert(result); //True or false
}
var error = function(err){
    alert("Error: " + err);
}
window.gpsDetect.checkGPS(success,error);
```