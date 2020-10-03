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
import { Button } from './button';
import { TVState } from './tVState';

export class TV {
    'state'?: TVState;
    'buttons'?: Array<Button>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "state",
            "baseName": "state",
            "type": "TVState"
        },
        {
            "name": "buttons",
            "baseName": "buttons",
            "type": "Array<Button>"
        }    ];

    static getAttributeTypeMap() {
        return TV.attributeTypeMap;
    }
}

