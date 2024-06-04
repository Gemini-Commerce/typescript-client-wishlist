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
 * @interface WishlistMergeWishlistsRequest
 */
export interface WishlistMergeWishlistsRequest {
    /**
     * 
     * @type {string}
     * @memberof WishlistMergeWishlistsRequest
     */
    'tenantId': string;
    /**
     * 
     * @type {string}
     * @memberof WishlistMergeWishlistsRequest
     */
    'startingWishlistId': string;
    /**
     * If the customer GRN is set on JWT, it will be used as default. Otherwise, it will be used the customer_grn field.
     * @type {string}
     * @memberof WishlistMergeWishlistsRequest
     */
    'customerGrn': string;
    /**
     * The wishlist to merge into the starting wishlist.
     * @type {string}
     * @memberof WishlistMergeWishlistsRequest
     */
    'targetWishlistId'?: string;
}
