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

import { WishlistLocalizedText } from '../models/WishlistLocalizedText';
import { HttpFile } from '../http/http';

export class WishlistAddItemToWishlistRequest {
    'tenantId': string;
    'wishlistId': string;
    'itemGrn': string;
    'preferredQuantity'?: string;
    'description'?: WishlistLocalizedText;
    'customerGrn'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "wishlistId",
            "baseName": "wishlistId",
            "type": "string",
            "format": ""
        },
        {
            "name": "itemGrn",
            "baseName": "itemGrn",
            "type": "string",
            "format": ""
        },
        {
            "name": "preferredQuantity",
            "baseName": "preferredQuantity",
            "type": "string",
            "format": "uint64"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "WishlistLocalizedText",
            "format": ""
        },
        {
            "name": "customerGrn",
            "baseName": "customerGrn",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WishlistAddItemToWishlistRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
