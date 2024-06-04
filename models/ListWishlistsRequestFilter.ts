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

export class ListWishlistsRequestFilter {
    /**
    * If the customer GRN is set on JWT, it will be used as default. Otherwise, it will be used the customer_grn field.
    */
    'customerGrn'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customerGrn",
            "baseName": "customerGrn",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListWishlistsRequestFilter.attributeTypeMap;
    }

    public constructor() {
    }
}

