'use strict';

/**
 * national-hero service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::national-hero.national-hero');
