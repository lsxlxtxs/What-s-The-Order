/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"EiHbGfLCvvk5envM0w8xGUoldADmFVlH"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"qiv1q4LUE0YQARrEPaB3U8VTH4BpS7i7"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"m4QKam8SQUHYz8Ecn4AW8a4RYGivNJSQ"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"dUEG5Hv8qfDCGWGXw6nswwQyovRRog7K"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"DYIf7tWuDJKuMxPHeuuT98PzHlrwto8U"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"NV3EquJpFyWSKBltD1Max4cWcpeI8Q8R"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
