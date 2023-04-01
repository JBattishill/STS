'use strict';

/**
 *  testing-connection controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::testing-connection.testing-connection');
