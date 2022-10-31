//
//  ReactBridge.m
//  ReactNativePhoneBatteryBridge
//
//  Created by admin on 31/10/22.
//

#import "ReactBridge.h"

@implementation ReactBridge

{
  RCTResponseSenderBlock _callback;
}

RCT_EXPORT_MODULE(PhoneBatteryModule);

-(NSArray<NSString *> *)supportedEvents {
    return @[@"getPhoneBattery"];
}

RCT_EXPORT_METHOD(getPhoneBattery:(NSString *)name location:(NSString *)location myCallback:(RCTResponseSenderBlock)callback)
{
  
  [[UIDevice currentDevice] setBatteryMonitoringEnabled:YES];
  float batteryLevel = [[UIDevice currentDevice] batteryLevel];

  //This will give you the battery between 0.0 (empty) and 1.0 (100% charged)
  //If you want it as a percentage, you can do this:
  batteryLevel *= -100;
  
  callback(@[[NSString stringWithFormat:@"Battery left on %@ is %f% \%", name, batteryLevel]]);
}


@end
