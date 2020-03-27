/**
 * @file services/base/index.js
 * @class BaseService
 * @classdesc
 * Interface to comunicate with the API.
 * This version is a revision and refactoring based on Mauricio Sanchez
 * approach <mausadd@outlook.com> implementation
 * @since v1.0.0
 * @author boykland/clenondavis <dev@carloslenon.com>
 */

// #region dependencies
import request from "superagent";
// #endregion
// #region common
// #endregion

class BaseService {
  defaultHeaders = {
    "Content-Type": "application/json"
  };

  /**
   * @function
   * @name _getHeaders
   * @memberof BaseService
   * @description Compose the request headers, including the authorization token.
   * @param {OBJECT} defaultHeaders Default headers overridden by particular headers provided.
   * @param {OBJECT} userHeaders Particular headers for a request.
   * @param {String} token Authorization token if the user is logged-in.
   * @return {OBJECT} The definitive headers to be used in a request.
   */
  _getHeaders = (defaultHeaders, userHeaders, token) => {
    const headers = Object.assign(defaultHeaders, userHeaders);
    // TODO: set or remove token
    return headers;
  };

  /**
   * @function
   * @name get
   * @memberof BaseService
   * @description Function to perform a get request to the API.
   * @param {String} url The URL path pointing to an specific resource in the API.
   * @param {OBJECT} query An string or an object that represent the query string for a request.
   * @param {STRING} moduleView module for the origin request.
   * @param {BOOLEAN} isList amount of element in the response
   * @param {OBJECT} headers Specific headers to be sent in a request.
   * @return {OBJECT} Response sent by the API.
   */
  get(url, query, moduleView, isList, headers) {
    try {
      return (
        request
          .get(url)
          .query(query)
          .timeout({
            response: 60000, // Wait 10 seconds for the server to start sending,
            deadline: 60000 // but allow 10 seconds for the file to finish loading.
          })
          // TODO: set token implementation, as headers parametes
          .set(this._getHeaders(this.defaultHeaders, headers))
          .then(resp => resp)
          .catch(err => err)
      );
    } catch (err) {
      return err;
    }
  }

  /**
   * @function
   * @name PUT
   * @memberof BaseService
   * @description Function to perform a get request to the API.
   * @param {String} url The URL path pointing to an specific resource in the API.
   * @param {OBJECT} data An string or an object that represent the data or body for a request.
   * @param {STRING} moduleView module for the origin request.
   * @param {BOOLEAN} isList amount of element in the response
   * @param {OBJECT} headers Specific headers to be sent in a request.
   * @return {OBJECT} Response sent by the API.
   */
  async put(url, data, moduleView, isList, headers) {
    try {
      const response = await request
        .put(url)
        // TODO: set token implementation, as headers parametes
        .set(this._getHeaders(this.defaultHeaders, headers))
        .send(data);
      return response.body;
    } catch (err) {
      return err;
    }
  }

  /**
   * @function
   * @name POST
   * @memberof BaseService
   * @description Function to perform a get request to the API.
   * @param {String} url The URL path pointing to an specific resource in the API.
   * @param {OBJECT} data An string or an object that represent the data or body for a request.
   * @param {STRING} moduleView module for the origin request.
   * @param {BOOLEAN} isList amount of element in the response
   * @param {OBJECT} headers Specific headers to be sent in a request.
   * @return {OBJECT} Response sent by the API.
   */
  async post(url, data, moduleView, isList, headers) {
    try {
      const response = await request
        .post(url)
        // TODO: set token implementation, as headers parametes
        .set(this._getHeaders(this.defaultHeaders, headers))
        .send(data);
      return response.body;
    } catch (err) {
      return err;
    }
  }
}

export default BaseService;
