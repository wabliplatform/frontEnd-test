/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Er from '../model/Er';

/**
* Er service.
* @module api/ErApi
* @version 1.0.0
*/
export default class ErApi {

    /**
    * Constructs a new ErApi. 
    * @alias module:api/ErApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createer operation.
     * @callback module:api/ErApi~createerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Er} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Er} er data to be created
     * @param {module:api/ErApi~createerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Er}
     */
    createer(er, callback) {
      let postBody = er;
      // verify the required parameter 'er' is set
      if (er === undefined || er === null) {
        throw new Error("Missing the required parameter 'er' when calling createer");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Er;
      return this.apiClient.callApi(
        '/er', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteer operation.
     * @callback module:api/ErApi~deleteerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} erId the Id parameter
     * @param {module:api/ErApi~deleteerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteer(erId, callback) {
      let postBody = null;
      // verify the required parameter 'erId' is set
      if (erId === undefined || erId === null) {
        throw new Error("Missing the required parameter 'erId' when calling deleteer");
      }

      let pathParams = {
        'erId': erId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/er/{erId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAller operation.
     * @callback module:api/ErApi~getAllerCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Er>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/ErApi~getAllerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Er>}
     */
    getAller(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Er];
      return this.apiClient.callApi(
        '/er/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the geter operation.
     * @callback module:api/ErApi~geterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Er} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} erId the Id parameter
     * @param {module:api/ErApi~geterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Er}
     */
    geter(erId, callback) {
      let postBody = null;
      // verify the required parameter 'erId' is set
      if (erId === undefined || erId === null) {
        throw new Error("Missing the required parameter 'erId' when calling geter");
      }

      let pathParams = {
        'erId': erId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Er;
      return this.apiClient.callApi(
        '/er/{erId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateer operation.
     * @callback module:api/ErApi~updateerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Er} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} erId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Er} opts.er data to be updated
     * @param {module:api/ErApi~updateerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Er}
     */
    updateer(erId, opts, callback) {
      opts = opts || {};
      let postBody = opts['er'];
      // verify the required parameter 'erId' is set
      if (erId === undefined || erId === null) {
        throw new Error("Missing the required parameter 'erId' when calling updateer");
      }

      let pathParams = {
        'erId': erId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Er;
      return this.apiClient.callApi(
        '/er/{erId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}