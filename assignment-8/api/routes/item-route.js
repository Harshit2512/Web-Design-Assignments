/**
 * item endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const itemController = require('../controllers/item-controller');
    // Item Routes for search and create.
    app.route('/items')
        .get(itemController.list)
        .post(itemController.post);

    // item Routes for get, update and delete.
    app.route('/items/:itemId')
        .get(itemController.get)
        .put(itemController.put)
        .delete(itemController.delete);
};