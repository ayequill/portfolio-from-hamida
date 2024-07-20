'use strict';

/**
 * development-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::development-project.development-project');
