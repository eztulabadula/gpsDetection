Gps detection plugin
====================

##Usage


```
var success = function(result){
    alert(result); //True or false
}
var error = function(err){
    alert("Error: " + err);
}
window.gpsDetect.checkGPS(success,error);
```