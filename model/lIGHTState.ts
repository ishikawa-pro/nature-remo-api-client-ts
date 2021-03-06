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

export class LIGHTState {
    'brightness'?: string;
    'power'?: LIGHTState.PowerEnum;
    'lastButton'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brightness",
            "baseName": "brightness",
            "type": "string"
        },
        {
            "name": "power",
            "baseName": "power",
            "type": "LIGHTState.PowerEnum"
        },
        {
            "name": "lastButton",
            "baseName": "last_button",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LIGHTState.attributeTypeMap;
    }
}

export namespace LIGHTState {
    export enum PowerEnum {
        on = <any> 'on',
        off = <any> 'off'
    }
}
