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
 * @interface WishlistWishlistItemResponse
 */
export interface WishlistWishlistItemResponse {
    /**
     * 
     * @type {string}
     * @memberof WishlistWishlistItemResponse
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof WishlistWishlistItemResponse
     */
    'grn'?: string;
    /**
     * 
     * @type {string}
     * @memberof WishlistWishlistItemResponse
     */
    'wishlistId'?: string;
    /**
     * 
     * @type {string}
     * @memberof WishlistWishlistItemResponse
     */
    'itemGrn'?: string;
    /**
     * 
     * @type {string}
     * @memberof WishlistWishlistItemResponse
     */
    'preferredQuantity'?: string;
    /**
     * 
     * @type {WishlistLocalizedText}
     * @memberof WishlistWishlistItemResponse
     */
    'description'?: WishlistLocalizedText;
    /**
     * 
     * @type {string}
     * @memberof WishlistWishlistItemResponse
     */
    'addedByCustomerGrn'?: string;
    /**
     * 
     * @type {Date}
     * @memberof WishlistWishlistItemResponse
     */
    'addedAt'?: Date;
    /**
     * 
     * @type {Date}
     * @memberof WishlistWishlistItemResponse
     */
    'updatedAt'?: Date;
}
