# .WishlistApi

All URIs are relative to *https://wishlist.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wishlistAddItemToWishlist**](WishlistApi.md#wishlistAddItemToWishlist) | **POST** /wishlist.Wishlist/AddItemToWishlist | 
[**wishlistAreItemsInWishlists**](WishlistApi.md#wishlistAreItemsInWishlists) | **POST** /wishlist.Wishlist/AreItemsInWishlists | 
[**wishlistBulkCreateSharing**](WishlistApi.md#wishlistBulkCreateSharing) | **POST** /wishlist.Wishlist/BulkCreateSharing | Sharing endpoints
[**wishlistBulkRemoveItemsFromWishlists**](WishlistApi.md#wishlistBulkRemoveItemsFromWishlists) | **POST** /wishlist.Wishlist/BulkRemoveItemsFromWishlists | BulkRemoveItemsFromWishlists removes items from wishlists.
[**wishlistBulkRevokeSharing**](WishlistApi.md#wishlistBulkRevokeSharing) | **POST** /wishlist.Wishlist/BulkRevokeSharing | 
[**wishlistCreateWishlist**](WishlistApi.md#wishlistCreateWishlist) | **POST** /wishlist.Wishlist/CreateWishlist | 
[**wishlistDeleteWishlist**](WishlistApi.md#wishlistDeleteWishlist) | **POST** /wishlist.Wishlist/DeleteWishlist | 
[**wishlistGetItemFromWishlist**](WishlistApi.md#wishlistGetItemFromWishlist) | **POST** /wishlist.Wishlist/GetItemFromWishlist | 
[**wishlistGetWishlistById**](WishlistApi.md#wishlistGetWishlistById) | **POST** /wishlist.Wishlist/GetWishlistById | 
[**wishlistGetWishlistBySharedCode**](WishlistApi.md#wishlistGetWishlistBySharedCode) | **POST** /wishlist.Wishlist/GetWishlistBySharedCode | 
[**wishlistListWishlistItems**](WishlistApi.md#wishlistListWishlistItems) | **POST** /wishlist.Wishlist/ListWishlistItems | 
[**wishlistListWishlists**](WishlistApi.md#wishlistListWishlists) | **POST** /wishlist.Wishlist/ListWishlists | 
[**wishlistMergeWishlists**](WishlistApi.md#wishlistMergeWishlists) | **POST** /wishlist.Wishlist/MergeWishlists | 
[**wishlistRemoveItemFromWishlist**](WishlistApi.md#wishlistRemoveItemFromWishlist) | **POST** /wishlist.Wishlist/RemoveItemFromWishlist | 
[**wishlistUpdateItemInWishlist**](WishlistApi.md#wishlistUpdateItemInWishlist) | **POST** /wishlist.Wishlist/UpdateItemInWishlist | 
[**wishlistUpdateWishlist**](WishlistApi.md#wishlistUpdateWishlist) | **POST** /wishlist.Wishlist/UpdateWishlist | 


# **wishlistAddItemToWishlist**
> WishlistWishlistItemResponse wishlistAddItemToWishlist(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistAddItemToWishlistRequest = {
  // WishlistAddItemToWishlistRequest
  body: {
    tenantId: "tenantId_example",
    wishlistId: "wishlistId_example",
    itemGrn: "itemGrn_example",
    preferredQuantity: "preferredQuantity_example",
    description: {
      value: {
        "key": "key_example",
      },
    },
    customerGrn: "customerGrn_example",
  },
};

apiInstance.wishlistAddItemToWishlist(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistAddItemToWishlistRequest**|  |


### Return type

**WishlistWishlistItemResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistAreItemsInWishlists**
> WishlistAreItemsInWishlistsResponse wishlistAreItemsInWishlists(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistAreItemsInWishlistsRequest = {
  // WishlistAreItemsInWishlistsRequest
  body: {
    tenantId: "tenantId_example",
    wishlistId: "wishlistId_example",
    customerGrn: "customerGrn_example",
    itemGrns: [
      "itemGrns_example",
    ],
  },
};

apiInstance.wishlistAreItemsInWishlists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistAreItemsInWishlistsRequest**|  |


### Return type

**WishlistAreItemsInWishlistsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistBulkCreateSharing**
> WishlistBulkCreateSharingResponse wishlistBulkCreateSharing(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistBulkCreateSharingRequest = {
  // WishlistBulkCreateSharingRequest
  body: {
    tenantId: "tenantId_example",
    sharingRequests: [
      {
        wishlistId: "wishlistId_example",
        permission: "UNKNOWN_PERMISSION",
        customerGrn: "customerGrn_example",
        customerAggregationId: "customerAggregationId_example",
      },
    ],
  },
};

apiInstance.wishlistBulkCreateSharing(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistBulkCreateSharingRequest**|  |


### Return type

**WishlistBulkCreateSharingResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistBulkRemoveItemsFromWishlists**
> any wishlistBulkRemoveItemsFromWishlists(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistBulkRemoveItemsFromWishlistsRequest = {
  // WishlistBulkRemoveItemsFromWishlistsRequest
  body: {
    tenantId: "tenantId_example",
    itemGrns: [
      "itemGrns_example",
    ],
    wishlistIds: [
      "wishlistIds_example",
    ],
  },
};

apiInstance.wishlistBulkRemoveItemsFromWishlists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistBulkRemoveItemsFromWishlistsRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistBulkRevokeSharing**
> any wishlistBulkRevokeSharing(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistBulkRevokeSharingRequest = {
  // WishlistBulkRevokeSharingRequest
  body: {
    tenantId: "tenantId_example",
    sharingIds: [
      "sharingIds_example",
    ],
  },
};

apiInstance.wishlistBulkRevokeSharing(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistBulkRevokeSharingRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistCreateWishlist**
> WishlistWishlistResponse wishlistCreateWishlist(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistCreateWishlistRequest = {
  // WishlistCreateWishlistRequest
  body: {
    tenantId: "tenantId_example",
    privacy: "PRIVACY_UNKNOWN",
    label: {
      value: {
        "key": "key_example",
      },
    },
    description: {
      value: {
        "key": "key_example",
      },
    },
    customerGrn: "customerGrn_example",
    isDefault: true,
  },
};

apiInstance.wishlistCreateWishlist(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistCreateWishlistRequest**|  |


### Return type

**WishlistWishlistResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistDeleteWishlist**
> any wishlistDeleteWishlist(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistDeleteWishlistRequest = {
  // WishlistDeleteWishlistRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.wishlistDeleteWishlist(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistDeleteWishlistRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistGetItemFromWishlist**
> WishlistWishlistItemResponse wishlistGetItemFromWishlist(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistGetItemFromWishlistRequest = {
  // WishlistGetItemFromWishlistRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.wishlistGetItemFromWishlist(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistGetItemFromWishlistRequest**|  |


### Return type

**WishlistWishlistItemResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistGetWishlistById**
> WishlistWishlistResponse wishlistGetWishlistById(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistGetWishlistByIdRequest = {
  // WishlistGetWishlistByIdRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.wishlistGetWishlistById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistGetWishlistByIdRequest**|  |


### Return type

**WishlistWishlistResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistGetWishlistBySharedCode**
> WishlistWishlistResponse wishlistGetWishlistBySharedCode(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistGetWishlistBySharedCodeRequest = {
  // WishlistGetWishlistBySharedCodeRequest
  body: {
    tenantId: "tenantId_example",
    sharedCode: "sharedCode_example",
    customerGrn: "customerGrn_example",
  },
};

apiInstance.wishlistGetWishlistBySharedCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistGetWishlistBySharedCodeRequest**|  |


### Return type

**WishlistWishlistResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistListWishlistItems**
> WishlistListWishlistItemsResponse wishlistListWishlistItems(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistListWishlistItemsRequest = {
  // WishlistListWishlistItemsRequest
  body: {
    tenantId: "tenantId_example",
    wishlistId: "wishlistId_example",
    customerGrn: "customerGrn_example",
    pageSize: 1,
    pageToken: "pageToken_example",
  },
};

apiInstance.wishlistListWishlistItems(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistListWishlistItemsRequest**|  |


### Return type

**WishlistListWishlistItemsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistListWishlists**
> WishlistListWishlistsResponse wishlistListWishlists(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistListWishlistsRequest = {
  // WishlistListWishlistsRequest
  body: {
    tenantId: "tenantId_example",
    pageSize: 1,
    pageToken: "pageToken_example",
    filter: {
      customerGrn: "customerGrn_example",
    },
    filterMask: "filterMask_example",
  },
};

apiInstance.wishlistListWishlists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistListWishlistsRequest**|  |


### Return type

**WishlistListWishlistsResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistMergeWishlists**
> WishlistWishlistResponse wishlistMergeWishlists(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistMergeWishlistsRequest = {
  // WishlistMergeWishlistsRequest
  body: {
    tenantId: "tenantId_example",
    startingWishlistId: "startingWishlistId_example",
    customerGrn: "customerGrn_example",
    targetWishlistId: "targetWishlistId_example",
  },
};

apiInstance.wishlistMergeWishlists(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistMergeWishlistsRequest**|  |


### Return type

**WishlistWishlistResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistRemoveItemFromWishlist**
> any wishlistRemoveItemFromWishlist(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistRemoveItemFromWishlistRequest = {
  // WishlistRemoveItemFromWishlistRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
  },
};

apiInstance.wishlistRemoveItemFromWishlist(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistRemoveItemFromWishlistRequest**|  |


### Return type

**any**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistUpdateItemInWishlist**
> WishlistWishlistItemResponse wishlistUpdateItemInWishlist(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistUpdateItemInWishlistRequest = {
  // WishlistUpdateItemInWishlistRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    payload: {
      preferredQuantity: "preferredQuantity_example",
      description: {
        value: {
          "key": "key_example",
        },
      },
      customerGrn: "customerGrn_example",
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.wishlistUpdateItemInWishlist(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistUpdateItemInWishlistRequest**|  |


### Return type

**WishlistWishlistItemResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **wishlistUpdateWishlist**
> WishlistWishlistResponse wishlistUpdateWishlist(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WishlistApi(configuration);

let body:.WishlistApiWishlistUpdateWishlistRequest = {
  // WishlistUpdateWishlistRequest
  body: {
    tenantId: "tenantId_example",
    id: "id_example",
    payload: {
      privacy: "PRIVACY_UNKNOWN",
      label: {
        value: {
          "key": "key_example",
        },
      },
      description: {
        value: {
          "key": "key_example",
        },
      },
      isDefault: true,
    },
    payloadMask: "payloadMask_example",
  },
};

apiInstance.wishlistUpdateWishlist(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **WishlistUpdateWishlistRequest**|  |


### Return type

**WishlistWishlistResponse**

### Authorization

[Authorization](README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


