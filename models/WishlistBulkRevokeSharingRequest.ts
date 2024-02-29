/**
 * Wishlist Service
 * API for managing wishlists
 *
 * OpenAPI spec version: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class WishlistBulkRevokeSharingRequest {
    'tenantId'?: string;
    'sharingIds'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sharingIds",
            "baseName": "sharingIds",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WishlistBulkRevokeSharingRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

