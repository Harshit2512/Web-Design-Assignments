'use strict';
module.exports = function (app) {
    //Initialize models
    let itemModel = require('./models/item');

    //Initialize routes
    let itemRoutes = require('./routes/item-route');
    itemRoutes(app);
};