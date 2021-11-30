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

import ApiClient from '../ApiClient';

/**
 * The Test model module.
 * @module model/Test
 * @version 1.0.0
 */
class Test {
    /**
     * Constructs a new <code>Test</code>.
     * @alias module:model/Test
     * @param test {String} 
     */
    constructor(test) { 
        
        Test.initialize(this, test);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, test) { 
        obj['test'] = test;
    }

    /**
     * Constructs a <code>Test</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Test} obj Optional instance to populate.
     * @return {module:model/Test} The populated <code>Test</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Test();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('test')) {
                obj['test'] = ApiClient.convertToType(data['test'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Test.prototype['_id'] = undefined;

/**
 * @member {String} test
 */
Test.prototype['test'] = undefined;






export default Test;

