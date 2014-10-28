package com.iametza.plugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.PluginResult;
import org.apache.cordova.PluginResult.Status;
import org.json.JSONArray;

import android.location.LocationManager;
import android.provider.Settings;

public class GpsDetection extends CordovaPlugin {
    @Override
    public boolean execute(String action, final JSONArray args, CallbackContext callbackContext) {
    	
    	PluginResult result = null;
        boolean gpsEnabled = false;
        String GPSDetectionAction = "gpsDetection";
        
        if (GPSDetectionAction.equals(action)) {
        	android.content.ContentResolver contentResolver = cordova.getActivity().getApplicationContext().getContentResolver();
        	gpsEnabled = Settings.Secure.isLocationProviderEnabled(contentResolver, LocationManager.GPS_PROVIDER);
        	result = new PluginResult(Status.OK, gpsEnabled);
		Log.v("Egoera", "OK");
        }
        else {
            result = new PluginResult(Status.INVALID_ACTION);
	    Log.v("Egoera", "Fail");
        }
        
        callbackContext.sendPluginResult(result);
        
        return true;
    }
}