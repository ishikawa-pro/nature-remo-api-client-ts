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

export class Button {
    /**
    * Name of button. It is used for \"POST /1/{applaince}/tv\" and \"POST /1/{appliance}/light\".
    */
    'name'?: string;
    /**
    * Basename of the image file included in the app. Ex: \"ico_ac_1\" 
    */
    'image'?: string;
    /**
    * Label of button.
    */
    'label'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Button.attributeTypeMap;
    }
}
