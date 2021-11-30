# TempApi.TestApi

All URIs are relative to *http://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createtest**](TestApi.md#createtest) | **POST** /test | Creates the data
[**deletetest**](TestApi.md#deletetest) | **DELETE** /test/{testId} | Delete the element
[**getAlltest**](TestApi.md#getAlltest) | **GET** /test/getAll | Get all the data
[**gettest**](TestApi.md#gettest) | **GET** /test/{testId} | Get the element
[**updatetest**](TestApi.md#updatetest) | **PUT** /test/{testId} | Updates the element



## createtest

> Test createtest(test)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TestApi();
let test = new TempApi.Test(); // Test | data to be created
apiInstance.createtest(test, (error, data, response) => {
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
 **test** | [**Test**](Test.md)| data to be created | 

### Return type

[**Test**](Test.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletetest

> deletetest(testId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TestApi();
let testId = "testId_example"; // String | the Id parameter
apiInstance.deletetest(testId, (error, data, response) => {
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
 **testId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAlltest

> [Test] getAlltest()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TestApi();
apiInstance.getAlltest((error, data, response) => {
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

[**[Test]**](Test.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gettest

> Test gettest(testId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TestApi();
let testId = "testId_example"; // String | the Id parameter
apiInstance.gettest(testId, (error, data, response) => {
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
 **testId** | **String**| the Id parameter | 

### Return type

[**Test**](Test.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatetest

> Test updatetest(testId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.TestApi();
let testId = "testId_example"; // String | the Id parameter
let opts = {
  'test': new TempApi.Test() // Test | data to be updated
};
apiInstance.updatetest(testId, opts, (error, data, response) => {
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
 **testId** | **String**| the Id parameter | 
 **test** | [**Test**](Test.md)| data to be updated | [optional] 

### Return type

[**Test**](Test.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

