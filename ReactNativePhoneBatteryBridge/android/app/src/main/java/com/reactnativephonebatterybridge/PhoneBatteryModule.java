package com.reactnativephonebatterybridge;

import static android.content.Context.BATTERY_SERVICE;

import android.content.Context;
import android.os.BatteryManager;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PhoneBatteryModule extends ReactContextBaseJavaModule {
    final Context context;

    public PhoneBatteryModule(Context context) {
        this.context = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "PhoneBatteryModule";
    }

    @ReactMethod
    public void getPhoneBattery(String time, Callback callback) {
        BatteryManager bm = (BatteryManager) context.getSystemService(BATTERY_SERVICE);
        int batLevel = bm.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
        String result = "time: " + time + ", battery: " + batLevel + "%";
        callback.invoke(result);
    }

}
