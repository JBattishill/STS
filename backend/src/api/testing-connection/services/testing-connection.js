'use strict';

/**
 * testing-connection service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testing-connection.testing-connection');
