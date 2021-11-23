# TempApi.ErApi

All URIs are relative to *http://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createer**](ErApi.md#createer) | **POST** /er | Creates the data
[**deleteer**](ErApi.md#deleteer) | **DELETE** /er/{erId} | Delete the element
[**getAller**](ErApi.md#getAller) | **GET** /er/getAll | Get all the data
[**geter**](ErApi.md#geter) | **GET** /er/{erId} | Get the element
[**updateer**](ErApi.md#updateer) | **PUT** /er/{erId} | Updates the element



## createer

> Er createer(er)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ErApi();
let er = new TempApi.Er(); // Er | data to be created
apiInstance.createer(er, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **er** | [**Er**](Er.md)| data to be created | 

### Return type

[**Er**](Er.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteer

> deleteer(erId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ErApi();
let erId = "erId_example"; // String | the Id parameter
apiInstance.deleteer(erId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **erId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAller

> [Er] getAller()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ErApi();
apiInstance.getAller((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Er]**](Er.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## geter

> Er geter(erId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ErApi();
let erId = "erId_example"; // String | the Id parameter
apiInstance.geter(erId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **erId** | **String**| the Id parameter | 

### Return type

[**Er**](Er.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateer

> Er updateer(erId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ErApi();
let erId = "erId_example"; // String | the Id parameter
let opts = {
  'er': new TempApi.Er() // Er | data to be updated
};
apiInstance.updateer(erId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **erId** | **String**| the Id parameter | 
 **er** | [**Er**](Er.md)| data to be updated | [optional] 

### Return type

[**Er**](Er.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

