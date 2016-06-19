'use strict'

/**
 * Dependencies
 */
const OIDCRequest = require('./OIDCRequest')

/**
 * DynamicRegistrationRequest
 */
class DynamicRegistrationRequest extends OIDCRequest {

  /**
   * Request Handler
   *
   * @param {HTTPRequest} req
   * @param {HTTPResponse} res
   * @param {Provider} provider
   */
  static handle (req, res, provider) {
  }
}

/**
 * Export
 */
module.exports = DynamicRegistrationRequest


