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

import { WishlistPermission } from '../models/WishlistPermission';
import { HttpFile } from '../http/http';

export class WishlistSharingRequest {
    'wishlistId'?: string;
    'permission'?: WishlistPermission;
    'customerGrn'?: string;
    'customerAggregationId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "wishlistId",
            "baseName": "wishlistId",
            "type": "string",
            "format": ""
        },
        {
            "name": "permission",
            "baseName": "permission",
            "type": "WishlistPermission",
            "format": ""
        },
        {
            "name": "customerGrn",
            "baseName": "customerGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerAggregationId",
            "baseName": "customerAggregationId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WishlistSharingRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



