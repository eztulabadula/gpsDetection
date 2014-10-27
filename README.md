Gps detection plugin
====================

##Usage


Plugin-a instalatu

```
cordova plugin add https://github.com/kklrd/gpsDetection.git
```

Javascript-eko kodea

```
var success = function(result){
    alert(result); //True or false
}
var error = function(err){
    alert("Error: " + err);
}
window.gpsDetect.checkGPS(success,error);
```