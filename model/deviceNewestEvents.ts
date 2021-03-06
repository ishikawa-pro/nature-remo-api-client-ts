/**
 * Nature API
 * Read/Write Nature Remo
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SensorValue } from './sensorValue';

export class DeviceNewestEvents {
    'te'?: SensorValue;
    'hu'?: SensorValue;
    'il'?: SensorValue;
    'mo'?: SensorValue;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "te",
            "baseName": "te",
            "type": "SensorValue"
        },
        {
            "name": "hu",
            "baseName": "hu",
            "type": "SensorValue"
        },
        {
            "name": "il",
            "baseName": "il",
            "type": "SensorValue"
        },
        {
            "name": "mo",
            "baseName": "mo",
            "type": "SensorValue"
        }    ];

    static getAttributeTypeMap() {
        return DeviceNewestEvents.attributeTypeMap;
    }
}

