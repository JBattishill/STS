'use strict';

/**
 * testing-connection router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::testing-connection.testing-connection');
