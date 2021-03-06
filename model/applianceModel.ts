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

export class ApplianceModel {
    'id'?: string;
    'manufacturer'?: string;
    'remoteName'?: string;
    'name'?: string;
    /**
    * Basename of the image file included in the app. Ex: \"ico_ac_1\" 
    */
    'image'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "manufacturer",
            "baseName": "manufacturer",
            "type": "string"
        },
        {
            "name": "remoteName",
            "baseName": "remote_name",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ApplianceModel.attributeTypeMap;
    }
}

