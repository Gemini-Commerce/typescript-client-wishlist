import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ListWishlistsRequestFilter } from '../models/ListWishlistsRequestFilter';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';
import { WishlistAddItemToWishlistRequest } from '../models/WishlistAddItemToWishlistRequest';
import { WishlistAreItemsInWishlistsRequest } from '../models/WishlistAreItemsInWishlistsRequest';
import { WishlistAreItemsInWishlistsResponse } from '../models/WishlistAreItemsInWishlistsResponse';
import { WishlistAreItemsInWishlistsResponsePayload } from '../models/WishlistAreItemsInWishlistsResponsePayload';
import { WishlistBulkCreateSharingRequest } from '../models/WishlistBulkCreateSharingRequest';
import { WishlistBulkCreateSharingResponse } from '../models/WishlistBulkCreateSharingResponse';
import { WishlistBulkRemoveItemsFromWishlistsRequest } from '../models/WishlistBulkRemoveItemsFromWishlistsRequest';
import { WishlistBulkRevokeSharingRequest } from '../models/WishlistBulkRevokeSharingRequest';
import { WishlistCreateWishlistRequest } from '../models/WishlistCreateWishlistRequest';
import { WishlistDeleteWishlistRequest } from '../models/WishlistDeleteWishlistRequest';
import { WishlistGetItemFromWishlistRequest } from '../models/WishlistGetItemFromWishlistRequest';
import { WishlistGetWishlistByIdRequest } from '../models/WishlistGetWishlistByIdRequest';
import { WishlistGetWishlistBySharedCodeRequest } from '../models/WishlistGetWishlistBySharedCodeRequest';
import { WishlistListWishlistItemsRequest } from '../models/WishlistListWishlistItemsRequest';
import { WishlistListWishlistItemsResponse } from '../models/WishlistListWishlistItemsResponse';
import { WishlistListWishlistsRequest } from '../models/WishlistListWishlistsRequest';
import { WishlistListWishlistsResponse } from '../models/WishlistListWishlistsResponse';
import { WishlistLocalizedText } from '../models/WishlistLocalizedText';
import { WishlistMergeWishlistsRequest } from '../models/WishlistMergeWishlistsRequest';
import { WishlistPermission } from '../models/WishlistPermission';
import { WishlistPrivacy } from '../models/WishlistPrivacy';
import { WishlistRemoveItemFromWishlistRequest } from '../models/WishlistRemoveItemFromWishlistRequest';
import { WishlistSharingRequest } from '../models/WishlistSharingRequest';
import { WishlistSharingResponse } from '../models/WishlistSharingResponse';
import { WishlistUpdateItemInWishlistRequest } from '../models/WishlistUpdateItemInWishlistRequest';
import { WishlistUpdateItemInWishlistRequestPayload } from '../models/WishlistUpdateItemInWishlistRequestPayload';
import { WishlistUpdateWishlistRequest } from '../models/WishlistUpdateWishlistRequest';
import { WishlistUpdateWishlistRequestPayload } from '../models/WishlistUpdateWishlistRequestPayload';
import { WishlistWishlistItemResponse } from '../models/WishlistWishlistItemResponse';
import { WishlistWishlistResponse } from '../models/WishlistWishlistResponse';
import { ObservableWishlistApi } from './ObservableAPI';

import { WishlistApiRequestFactory, WishlistApiResponseProcessor} from "../apis/WishlistApi";
export class PromiseWishlistApi {
    private api: ObservableWishlistApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WishlistApiRequestFactory,
        responseProcessor?: WishlistApiResponseProcessor
    ) {
        this.api = new ObservableWishlistApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param body 
     */
    public wishlistAddItemToWishlistWithHttpInfo(body: WishlistAddItemToWishlistRequest, _options?: Configuration): Promise<HttpInfo<WishlistWishlistItemResponse>> {
        const result = this.api.wishlistAddItemToWishlistWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistAddItemToWishlist(body: WishlistAddItemToWishlistRequest, _options?: Configuration): Promise<WishlistWishlistItemResponse> {
        const result = this.api.wishlistAddItemToWishlist(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistAreItemsInWishlistsWithHttpInfo(body: WishlistAreItemsInWishlistsRequest, _options?: Configuration): Promise<HttpInfo<WishlistAreItemsInWishlistsResponse>> {
        const result = this.api.wishlistAreItemsInWishlistsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistAreItemsInWishlists(body: WishlistAreItemsInWishlistsRequest, _options?: Configuration): Promise<WishlistAreItemsInWishlistsResponse> {
        const result = this.api.wishlistAreItemsInWishlists(body, _options);
        return result.toPromise();
    }

    /**
     * Sharing endpoints
     * @param body 
     */
    public wishlistBulkCreateSharingWithHttpInfo(body: WishlistBulkCreateSharingRequest, _options?: Configuration): Promise<HttpInfo<WishlistBulkCreateSharingResponse>> {
        const result = this.api.wishlistBulkCreateSharingWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Sharing endpoints
     * @param body 
     */
    public wishlistBulkCreateSharing(body: WishlistBulkCreateSharingRequest, _options?: Configuration): Promise<WishlistBulkCreateSharingResponse> {
        const result = this.api.wishlistBulkCreateSharing(body, _options);
        return result.toPromise();
    }

    /**
     * BulkRemoveItemsFromWishlists removes items from wishlists.
     * @param body 
     */
    public wishlistBulkRemoveItemsFromWishlistsWithHttpInfo(body: WishlistBulkRemoveItemsFromWishlistsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.wishlistBulkRemoveItemsFromWishlistsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * BulkRemoveItemsFromWishlists removes items from wishlists.
     * @param body 
     */
    public wishlistBulkRemoveItemsFromWishlists(body: WishlistBulkRemoveItemsFromWishlistsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.wishlistBulkRemoveItemsFromWishlists(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistBulkRevokeSharingWithHttpInfo(body: WishlistBulkRevokeSharingRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.wishlistBulkRevokeSharingWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistBulkRevokeSharing(body: WishlistBulkRevokeSharingRequest, _options?: Configuration): Promise<any> {
        const result = this.api.wishlistBulkRevokeSharing(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistCreateWishlistWithHttpInfo(body: WishlistCreateWishlistRequest, _options?: Configuration): Promise<HttpInfo<WishlistWishlistResponse>> {
        const result = this.api.wishlistCreateWishlistWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistCreateWishlist(body: WishlistCreateWishlistRequest, _options?: Configuration): Promise<WishlistWishlistResponse> {
        const result = this.api.wishlistCreateWishlist(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistDeleteWishlistWithHttpInfo(body: WishlistDeleteWishlistRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.wishlistDeleteWishlistWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistDeleteWishlist(body: WishlistDeleteWishlistRequest, _options?: Configuration): Promise<any> {
        const result = this.api.wishlistDeleteWishlist(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistGetItemFromWishlistWithHttpInfo(body: WishlistGetItemFromWishlistRequest, _options?: Configuration): Promise<HttpInfo<WishlistWishlistItemResponse>> {
        const result = this.api.wishlistGetItemFromWishlistWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistGetItemFromWishlist(body: WishlistGetItemFromWishlistRequest, _options?: Configuration): Promise<WishlistWishlistItemResponse> {
        const result = this.api.wishlistGetItemFromWishlist(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistGetWishlistByIdWithHttpInfo(body: WishlistGetWishlistByIdRequest, _options?: Configuration): Promise<HttpInfo<WishlistWishlistResponse>> {
        const result = this.api.wishlistGetWishlistByIdWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistGetWishlistById(body: WishlistGetWishlistByIdRequest, _options?: Configuration): Promise<WishlistWishlistResponse> {
        const result = this.api.wishlistGetWishlistById(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistGetWishlistBySharedCodeWithHttpInfo(body: WishlistGetWishlistBySharedCodeRequest, _options?: Configuration): Promise<HttpInfo<WishlistWishlistResponse>> {
        const result = this.api.wishlistGetWishlistBySharedCodeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistGetWishlistBySharedCode(body: WishlistGetWishlistBySharedCodeRequest, _options?: Configuration): Promise<WishlistWishlistResponse> {
        const result = this.api.wishlistGetWishlistBySharedCode(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistListWishlistItemsWithHttpInfo(body: WishlistListWishlistItemsRequest, _options?: Configuration): Promise<HttpInfo<WishlistListWishlistItemsResponse>> {
        const result = this.api.wishlistListWishlistItemsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistListWishlistItems(body: WishlistListWishlistItemsRequest, _options?: Configuration): Promise<WishlistListWishlistItemsResponse> {
        const result = this.api.wishlistListWishlistItems(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistListWishlistsWithHttpInfo(body: WishlistListWishlistsRequest, _options?: Configuration): Promise<HttpInfo<WishlistListWishlistsResponse>> {
        const result = this.api.wishlistListWishlistsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistListWishlists(body: WishlistListWishlistsRequest, _options?: Configuration): Promise<WishlistListWishlistsResponse> {
        const result = this.api.wishlistListWishlists(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistMergeWishlistsWithHttpInfo(body: WishlistMergeWishlistsRequest, _options?: Configuration): Promise<HttpInfo<WishlistWishlistResponse>> {
        const result = this.api.wishlistMergeWishlistsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistMergeWishlists(body: WishlistMergeWishlistsRequest, _options?: Configuration): Promise<WishlistWishlistResponse> {
        const result = this.api.wishlistMergeWishlists(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistRemoveItemFromWishlistWithHttpInfo(body: WishlistRemoveItemFromWishlistRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.wishlistRemoveItemFromWishlistWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistRemoveItemFromWishlist(body: WishlistRemoveItemFromWishlistRequest, _options?: Configuration): Promise<any> {
        const result = this.api.wishlistRemoveItemFromWishlist(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistUpdateItemInWishlistWithHttpInfo(body: WishlistUpdateItemInWishlistRequest, _options?: Configuration): Promise<HttpInfo<WishlistWishlistItemResponse>> {
        const result = this.api.wishlistUpdateItemInWishlistWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistUpdateItemInWishlist(body: WishlistUpdateItemInWishlistRequest, _options?: Configuration): Promise<WishlistWishlistItemResponse> {
        const result = this.api.wishlistUpdateItemInWishlist(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistUpdateWishlistWithHttpInfo(body: WishlistUpdateWishlistRequest, _options?: Configuration): Promise<HttpInfo<WishlistWishlistResponse>> {
        const result = this.api.wishlistUpdateWishlistWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public wishlistUpdateWishlist(body: WishlistUpdateWishlistRequest, _options?: Configuration): Promise<WishlistWishlistResponse> {
        const result = this.api.wishlistUpdateWishlist(body, _options);
        return result.toPromise();
    }


}



