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
import { WishlistPrivacy } from '../models/WishlistPrivacy';
import { HttpFile } from '../http/http';

export class WishlistCreateWishlistRequest {
    'tenantId': string;
    'privacy': WishlistPrivacy;
    'label'?: WishlistLocalizedText;
    'description'?: WishlistLocalizedText;
    /**
    * If the customer GRN is set on JWT, it will be used as default. Otherwise, it will be used the customer_grn field.
    */
    'customerGrn'?: string;
    'isDefault'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "privacy",
            "baseName": "privacy",
            "type": "WishlistPrivacy",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "WishlistLocalizedText",
            "format": ""
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
        },
        {
            "name": "isDefault",
            "baseName": "isDefault",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WishlistCreateWishlistRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



