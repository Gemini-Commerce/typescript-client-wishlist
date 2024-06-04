/* tslint:disable */
/* eslint-disable */
/**
 * Wishlist Service
 * API for managing wishlists
 *
 * The version of the OpenAPI document: v1
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface WishlistBulkRevokeSharingRequest
 */
export interface WishlistBulkRevokeSharingRequest {
    /**
     * 
     * @type {string}
     * @memberof WishlistBulkRevokeSharingRequest
     */
    'tenantId'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof WishlistBulkRevokeSharingRequest
     */
    'sharingIds'?: Array<string>;
}