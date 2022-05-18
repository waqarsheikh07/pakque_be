'use strict';

/**
 * heroes-category service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::heroes-category.heroes-category');
