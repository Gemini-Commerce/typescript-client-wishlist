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

import { ObservableWishlistApi } from "./ObservableAPI";
import { WishlistApiRequestFactory, WishlistApiResponseProcessor} from "../apis/WishlistApi";

export interface WishlistApiWishlistAddItemToWishlistRequest {
    /**
     * 
     * @type WishlistAddItemToWishlistRequest
     * @memberof WishlistApiwishlistAddItemToWishlist
     */
    body: WishlistAddItemToWishlistRequest
}

export interface WishlistApiWishlistAreItemsInWishlistsRequest {
    /**
     * 
     * @type WishlistAreItemsInWishlistsRequest
     * @memberof WishlistApiwishlistAreItemsInWishlists
     */
    body: WishlistAreItemsInWishlistsRequest
}

export interface WishlistApiWishlistBulkCreateSharingRequest {
    /**
     * 
     * @type WishlistBulkCreateSharingRequest
     * @memberof WishlistApiwishlistBulkCreateSharing
     */
    body: WishlistBulkCreateSharingRequest
}

export interface WishlistApiWishlistBulkRemoveItemsFromWishlistsRequest {
    /**
     * 
     * @type WishlistBulkRemoveItemsFromWishlistsRequest
     * @memberof WishlistApiwishlistBulkRemoveItemsFromWishlists
     */
    body: WishlistBulkRemoveItemsFromWishlistsRequest
}

export interface WishlistApiWishlistBulkRevokeSharingRequest {
    /**
     * 
     * @type WishlistBulkRevokeSharingRequest
     * @memberof WishlistApiwishlistBulkRevokeSharing
     */
    body: WishlistBulkRevokeSharingRequest
}

export interface WishlistApiWishlistCreateWishlistRequest {
    /**
     * 
     * @type WishlistCreateWishlistRequest
     * @memberof WishlistApiwishlistCreateWishlist
     */
    body: WishlistCreateWishlistRequest
}

export interface WishlistApiWishlistDeleteWishlistRequest {
    /**
     * 
     * @type WishlistDeleteWishlistRequest
     * @memberof WishlistApiwishlistDeleteWishlist
     */
    body: WishlistDeleteWishlistRequest
}

export interface WishlistApiWishlistGetItemFromWishlistRequest {
    /**
     * 
     * @type WishlistGetItemFromWishlistRequest
     * @memberof WishlistApiwishlistGetItemFromWishlist
     */
    body: WishlistGetItemFromWishlistRequest
}

export interface WishlistApiWishlistGetWishlistByIdRequest {
    /**
     * 
     * @type WishlistGetWishlistByIdRequest
     * @memberof WishlistApiwishlistGetWishlistById
     */
    body: WishlistGetWishlistByIdRequest
}

export interface WishlistApiWishlistGetWishlistBySharedCodeRequest {
    /**
     * 
     * @type WishlistGetWishlistBySharedCodeRequest
     * @memberof WishlistApiwishlistGetWishlistBySharedCode
     */
    body: WishlistGetWishlistBySharedCodeRequest
}

export interface WishlistApiWishlistListWishlistItemsRequest {
    /**
     * 
     * @type WishlistListWishlistItemsRequest
     * @memberof WishlistApiwishlistListWishlistItems
     */
    body: WishlistListWishlistItemsRequest
}

export interface WishlistApiWishlistListWishlistsRequest {
    /**
     * 
     * @type WishlistListWishlistsRequest
     * @memberof WishlistApiwishlistListWishlists
     */
    body: WishlistListWishlistsRequest
}

export interface WishlistApiWishlistMergeWishlistsRequest {
    /**
     * 
     * @type WishlistMergeWishlistsRequest
     * @memberof WishlistApiwishlistMergeWishlists
     */
    body: WishlistMergeWishlistsRequest
}

export interface WishlistApiWishlistRemoveItemFromWishlistRequest {
    /**
     * 
     * @type WishlistRemoveItemFromWishlistRequest
     * @memberof WishlistApiwishlistRemoveItemFromWishlist
     */
    body: WishlistRemoveItemFromWishlistRequest
}

export interface WishlistApiWishlistUpdateItemInWishlistRequest {
    /**
     * 
     * @type WishlistUpdateItemInWishlistRequest
     * @memberof WishlistApiwishlistUpdateItemInWishlist
     */
    body: WishlistUpdateItemInWishlistRequest
}

export interface WishlistApiWishlistUpdateWishlistRequest {
    /**
     * 
     * @type WishlistUpdateWishlistRequest
     * @memberof WishlistApiwishlistUpdateWishlist
     */
    body: WishlistUpdateWishlistRequest
}

export class ObjectWishlistApi {
    private api: ObservableWishlistApi

    public constructor(configuration: Configuration, requestFactory?: WishlistApiRequestFactory, responseProcessor?: WishlistApiResponseProcessor) {
        this.api = new ObservableWishlistApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public wishlistAddItemToWishlistWithHttpInfo(param: WishlistApiWishlistAddItemToWishlistRequest, options?: Configuration): Promise<HttpInfo<WishlistWishlistItemResponse>> {
        return this.api.wishlistAddItemToWishlistWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistAddItemToWishlist(param: WishlistApiWishlistAddItemToWishlistRequest, options?: Configuration): Promise<WishlistWishlistItemResponse> {
        return this.api.wishlistAddItemToWishlist(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistAreItemsInWishlistsWithHttpInfo(param: WishlistApiWishlistAreItemsInWishlistsRequest, options?: Configuration): Promise<HttpInfo<WishlistAreItemsInWishlistsResponse>> {
        return this.api.wishlistAreItemsInWishlistsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistAreItemsInWishlists(param: WishlistApiWishlistAreItemsInWishlistsRequest, options?: Configuration): Promise<WishlistAreItemsInWishlistsResponse> {
        return this.api.wishlistAreItemsInWishlists(param.body,  options).toPromise();
    }

    /**
     * Sharing endpoints
     * @param param the request object
     */
    public wishlistBulkCreateSharingWithHttpInfo(param: WishlistApiWishlistBulkCreateSharingRequest, options?: Configuration): Promise<HttpInfo<WishlistBulkCreateSharingResponse>> {
        return this.api.wishlistBulkCreateSharingWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Sharing endpoints
     * @param param the request object
     */
    public wishlistBulkCreateSharing(param: WishlistApiWishlistBulkCreateSharingRequest, options?: Configuration): Promise<WishlistBulkCreateSharingResponse> {
        return this.api.wishlistBulkCreateSharing(param.body,  options).toPromise();
    }

    /**
     * BulkRemoveItemsFromWishlists removes items from wishlists.
     * @param param the request object
     */
    public wishlistBulkRemoveItemsFromWishlistsWithHttpInfo(param: WishlistApiWishlistBulkRemoveItemsFromWishlistsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.wishlistBulkRemoveItemsFromWishlistsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * BulkRemoveItemsFromWishlists removes items from wishlists.
     * @param param the request object
     */
    public wishlistBulkRemoveItemsFromWishlists(param: WishlistApiWishlistBulkRemoveItemsFromWishlistsRequest, options?: Configuration): Promise<any> {
        return this.api.wishlistBulkRemoveItemsFromWishlists(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistBulkRevokeSharingWithHttpInfo(param: WishlistApiWishlistBulkRevokeSharingRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.wishlistBulkRevokeSharingWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistBulkRevokeSharing(param: WishlistApiWishlistBulkRevokeSharingRequest, options?: Configuration): Promise<any> {
        return this.api.wishlistBulkRevokeSharing(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistCreateWishlistWithHttpInfo(param: WishlistApiWishlistCreateWishlistRequest, options?: Configuration): Promise<HttpInfo<WishlistWishlistResponse>> {
        return this.api.wishlistCreateWishlistWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistCreateWishlist(param: WishlistApiWishlistCreateWishlistRequest, options?: Configuration): Promise<WishlistWishlistResponse> {
        return this.api.wishlistCreateWishlist(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistDeleteWishlistWithHttpInfo(param: WishlistApiWishlistDeleteWishlistRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.wishlistDeleteWishlistWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistDeleteWishlist(param: WishlistApiWishlistDeleteWishlistRequest, options?: Configuration): Promise<any> {
        return this.api.wishlistDeleteWishlist(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistGetItemFromWishlistWithHttpInfo(param: WishlistApiWishlistGetItemFromWishlistRequest, options?: Configuration): Promise<HttpInfo<WishlistWishlistItemResponse>> {
        return this.api.wishlistGetItemFromWishlistWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistGetItemFromWishlist(param: WishlistApiWishlistGetItemFromWishlistRequest, options?: Configuration): Promise<WishlistWishlistItemResponse> {
        return this.api.wishlistGetItemFromWishlist(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistGetWishlistByIdWithHttpInfo(param: WishlistApiWishlistGetWishlistByIdRequest, options?: Configuration): Promise<HttpInfo<WishlistWishlistResponse>> {
        return this.api.wishlistGetWishlistByIdWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistGetWishlistById(param: WishlistApiWishlistGetWishlistByIdRequest, options?: Configuration): Promise<WishlistWishlistResponse> {
        return this.api.wishlistGetWishlistById(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistGetWishlistBySharedCodeWithHttpInfo(param: WishlistApiWishlistGetWishlistBySharedCodeRequest, options?: Configuration): Promise<HttpInfo<WishlistWishlistResponse>> {
        return this.api.wishlistGetWishlistBySharedCodeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistGetWishlistBySharedCode(param: WishlistApiWishlistGetWishlistBySharedCodeRequest, options?: Configuration): Promise<WishlistWishlistResponse> {
        return this.api.wishlistGetWishlistBySharedCode(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistListWishlistItemsWithHttpInfo(param: WishlistApiWishlistListWishlistItemsRequest, options?: Configuration): Promise<HttpInfo<WishlistListWishlistItemsResponse>> {
        return this.api.wishlistListWishlistItemsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistListWishlistItems(param: WishlistApiWishlistListWishlistItemsRequest, options?: Configuration): Promise<WishlistListWishlistItemsResponse> {
        return this.api.wishlistListWishlistItems(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistListWishlistsWithHttpInfo(param: WishlistApiWishlistListWishlistsRequest, options?: Configuration): Promise<HttpInfo<WishlistListWishlistsResponse>> {
        return this.api.wishlistListWishlistsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistListWishlists(param: WishlistApiWishlistListWishlistsRequest, options?: Configuration): Promise<WishlistListWishlistsResponse> {
        return this.api.wishlistListWishlists(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistMergeWishlistsWithHttpInfo(param: WishlistApiWishlistMergeWishlistsRequest, options?: Configuration): Promise<HttpInfo<WishlistWishlistResponse>> {
        return this.api.wishlistMergeWishlistsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistMergeWishlists(param: WishlistApiWishlistMergeWishlistsRequest, options?: Configuration): Promise<WishlistWishlistResponse> {
        return this.api.wishlistMergeWishlists(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistRemoveItemFromWishlistWithHttpInfo(param: WishlistApiWishlistRemoveItemFromWishlistRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.wishlistRemoveItemFromWishlistWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistRemoveItemFromWishlist(param: WishlistApiWishlistRemoveItemFromWishlistRequest, options?: Configuration): Promise<any> {
        return this.api.wishlistRemoveItemFromWishlist(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistUpdateItemInWishlistWithHttpInfo(param: WishlistApiWishlistUpdateItemInWishlistRequest, options?: Configuration): Promise<HttpInfo<WishlistWishlistItemResponse>> {
        return this.api.wishlistUpdateItemInWishlistWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistUpdateItemInWishlist(param: WishlistApiWishlistUpdateItemInWishlistRequest, options?: Configuration): Promise<WishlistWishlistItemResponse> {
        return this.api.wishlistUpdateItemInWishlist(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistUpdateWishlistWithHttpInfo(param: WishlistApiWishlistUpdateWishlistRequest, options?: Configuration): Promise<HttpInfo<WishlistWishlistResponse>> {
        return this.api.wishlistUpdateWishlistWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public wishlistUpdateWishlist(param: WishlistApiWishlistUpdateWishlistRequest, options?: Configuration): Promise<WishlistWishlistResponse> {
        return this.api.wishlistUpdateWishlist(param.body,  options).toPromise();
    }

}
