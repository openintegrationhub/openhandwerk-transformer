/* eslint no-invalid-this: 0 no-console: 0 */
const eioUtils = require('elasticio-node').messages;
const { getExpression } = require('./../expressions/customerFromOih.js');
const { transform } = require('./transform.js');

/**
 * This method will be called from elastic.io platform providing following data
 *
 * @param msg incoming message object that contains ``body`` with payload
 */
async function processAction(msg) {
  try {
    const expression = getExpression(msg);
    const result = await transform(msg, expression);

    if (result !== undefined) {
      return eioUtils.newMessageWithBody(result.body);
    }
    return;
  } catch (e) {
    console.log(`ERROR: ${e}`);
    throw new Error(e);
  }
}

module.exports.process = processAction;
