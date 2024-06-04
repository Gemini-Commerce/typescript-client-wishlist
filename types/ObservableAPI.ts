import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { WishlistApiRequestFactory, WishlistApiResponseProcessor} from "../apis/WishlistApi";
export class ObservableWishlistApi {
    private requestFactory: WishlistApiRequestFactory;
    private responseProcessor: WishlistApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WishlistApiRequestFactory,
        responseProcessor?: WishlistApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WishlistApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WishlistApiResponseProcessor();
    }

    /**
     * @param body 
     */
    public wishlistAddItemToWishlistWithHttpInfo(body: WishlistAddItemToWishlistRequest, _options?: Configuration): Observable<HttpInfo<WishlistWishlistItemResponse>> {
        const requestContextPromise = this.requestFactory.wishlistAddItemToWishlist(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistAddItemToWishlistWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistAddItemToWishlist(body: WishlistAddItemToWishlistRequest, _options?: Configuration): Observable<WishlistWishlistItemResponse> {
        return this.wishlistAddItemToWishlistWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WishlistWishlistItemResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistAreItemsInWishlistsWithHttpInfo(body: WishlistAreItemsInWishlistsRequest, _options?: Configuration): Observable<HttpInfo<WishlistAreItemsInWishlistsResponse>> {
        const requestContextPromise = this.requestFactory.wishlistAreItemsInWishlists(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistAreItemsInWishlistsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistAreItemsInWishlists(body: WishlistAreItemsInWishlistsRequest, _options?: Configuration): Observable<WishlistAreItemsInWishlistsResponse> {
        return this.wishlistAreItemsInWishlistsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WishlistAreItemsInWishlistsResponse>) => apiResponse.data));
    }

    /**
     * Sharing endpoints
     * @param body 
     */
    public wishlistBulkCreateSharingWithHttpInfo(body: WishlistBulkCreateSharingRequest, _options?: Configuration): Observable<HttpInfo<WishlistBulkCreateSharingResponse>> {
        const requestContextPromise = this.requestFactory.wishlistBulkCreateSharing(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistBulkCreateSharingWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sharing endpoints
     * @param body 
     */
    public wishlistBulkCreateSharing(body: WishlistBulkCreateSharingRequest, _options?: Configuration): Observable<WishlistBulkCreateSharingResponse> {
        return this.wishlistBulkCreateSharingWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WishlistBulkCreateSharingResponse>) => apiResponse.data));
    }

    /**
     * BulkRemoveItemsFromWishlists removes items from wishlists.
     * @param body 
     */
    public wishlistBulkRemoveItemsFromWishlistsWithHttpInfo(body: WishlistBulkRemoveItemsFromWishlistsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.wishlistBulkRemoveItemsFromWishlists(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistBulkRemoveItemsFromWishlistsWithHttpInfo(rsp)));
            }));
    }

    /**
     * BulkRemoveItemsFromWishlists removes items from wishlists.
     * @param body 
     */
    public wishlistBulkRemoveItemsFromWishlists(body: WishlistBulkRemoveItemsFromWishlistsRequest, _options?: Configuration): Observable<any> {
        return this.wishlistBulkRemoveItemsFromWishlistsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistBulkRevokeSharingWithHttpInfo(body: WishlistBulkRevokeSharingRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.wishlistBulkRevokeSharing(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistBulkRevokeSharingWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistBulkRevokeSharing(body: WishlistBulkRevokeSharingRequest, _options?: Configuration): Observable<any> {
        return this.wishlistBulkRevokeSharingWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistCreateWishlistWithHttpInfo(body: WishlistCreateWishlistRequest, _options?: Configuration): Observable<HttpInfo<WishlistWishlistResponse>> {
        const requestContextPromise = this.requestFactory.wishlistCreateWishlist(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistCreateWishlistWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistCreateWishlist(body: WishlistCreateWishlistRequest, _options?: Configuration): Observable<WishlistWishlistResponse> {
        return this.wishlistCreateWishlistWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WishlistWishlistResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistDeleteWishlistWithHttpInfo(body: WishlistDeleteWishlistRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.wishlistDeleteWishlist(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistDeleteWishlistWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistDeleteWishlist(body: WishlistDeleteWishlistRequest, _options?: Configuration): Observable<any> {
        return this.wishlistDeleteWishlistWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistGetItemFromWishlistWithHttpInfo(body: WishlistGetItemFromWishlistRequest, _options?: Configuration): Observable<HttpInfo<WishlistWishlistItemResponse>> {
        const requestContextPromise = this.requestFactory.wishlistGetItemFromWishlist(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistGetItemFromWishlistWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistGetItemFromWishlist(body: WishlistGetItemFromWishlistRequest, _options?: Configuration): Observable<WishlistWishlistItemResponse> {
        return this.wishlistGetItemFromWishlistWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WishlistWishlistItemResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistGetWishlistByIdWithHttpInfo(body: WishlistGetWishlistByIdRequest, _options?: Configuration): Observable<HttpInfo<WishlistWishlistResponse>> {
        const requestContextPromise = this.requestFactory.wishlistGetWishlistById(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistGetWishlistByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistGetWishlistById(body: WishlistGetWishlistByIdRequest, _options?: Configuration): Observable<WishlistWishlistResponse> {
        return this.wishlistGetWishlistByIdWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WishlistWishlistResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistGetWishlistBySharedCodeWithHttpInfo(body: WishlistGetWishlistBySharedCodeRequest, _options?: Configuration): Observable<HttpInfo<WishlistWishlistResponse>> {
        const requestContextPromise = this.requestFactory.wishlistGetWishlistBySharedCode(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistGetWishlistBySharedCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistGetWishlistBySharedCode(body: WishlistGetWishlistBySharedCodeRequest, _options?: Configuration): Observable<WishlistWishlistResponse> {
        return this.wishlistGetWishlistBySharedCodeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WishlistWishlistResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistListWishlistItemsWithHttpInfo(body: WishlistListWishlistItemsRequest, _options?: Configuration): Observable<HttpInfo<WishlistListWishlistItemsResponse>> {
        const requestContextPromise = this.requestFactory.wishlistListWishlistItems(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistListWishlistItemsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistListWishlistItems(body: WishlistListWishlistItemsRequest, _options?: Configuration): Observable<WishlistListWishlistItemsResponse> {
        return this.wishlistListWishlistItemsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WishlistListWishlistItemsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistListWishlistsWithHttpInfo(body: WishlistListWishlistsRequest, _options?: Configuration): Observable<HttpInfo<WishlistListWishlistsResponse>> {
        const requestContextPromise = this.requestFactory.wishlistListWishlists(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistListWishlistsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistListWishlists(body: WishlistListWishlistsRequest, _options?: Configuration): Observable<WishlistListWishlistsResponse> {
        return this.wishlistListWishlistsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WishlistListWishlistsResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistMergeWishlistsWithHttpInfo(body: WishlistMergeWishlistsRequest, _options?: Configuration): Observable<HttpInfo<WishlistWishlistResponse>> {
        const requestContextPromise = this.requestFactory.wishlistMergeWishlists(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistMergeWishlistsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistMergeWishlists(body: WishlistMergeWishlistsRequest, _options?: Configuration): Observable<WishlistWishlistResponse> {
        return this.wishlistMergeWishlistsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WishlistWishlistResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistRemoveItemFromWishlistWithHttpInfo(body: WishlistRemoveItemFromWishlistRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.wishlistRemoveItemFromWishlist(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistRemoveItemFromWishlistWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistRemoveItemFromWishlist(body: WishlistRemoveItemFromWishlistRequest, _options?: Configuration): Observable<any> {
        return this.wishlistRemoveItemFromWishlistWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistUpdateItemInWishlistWithHttpInfo(body: WishlistUpdateItemInWishlistRequest, _options?: Configuration): Observable<HttpInfo<WishlistWishlistItemResponse>> {
        const requestContextPromise = this.requestFactory.wishlistUpdateItemInWishlist(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistUpdateItemInWishlistWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistUpdateItemInWishlist(body: WishlistUpdateItemInWishlistRequest, _options?: Configuration): Observable<WishlistWishlistItemResponse> {
        return this.wishlistUpdateItemInWishlistWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WishlistWishlistItemResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public wishlistUpdateWishlistWithHttpInfo(body: WishlistUpdateWishlistRequest, _options?: Configuration): Observable<HttpInfo<WishlistWishlistResponse>> {
        const requestContextPromise = this.requestFactory.wishlistUpdateWishlist(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.wishlistUpdateWishlistWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public wishlistUpdateWishlist(body: WishlistUpdateWishlistRequest, _options?: Configuration): Observable<WishlistWishlistResponse> {
        return this.wishlistUpdateWishlistWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<WishlistWishlistResponse>) => apiResponse.data));
    }

}
