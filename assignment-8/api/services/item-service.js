/**
 * Service for item operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Item = mongoose.model('items');

/**
 * Returns an array of item object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Item.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new item object.
 *
 * @param {Object} item {Item object}
 */
exports.save = function (item) {
    const newItem = new Item(item);
    const promise = newItem.save();
    return promise;
};

/**
 * Returns the item object matching the id.
 *
 * @param {string} itemId {Id of the item object}
 */
exports.get = function (itemId) {
    const promise = Item.findById(itemId).exec();
    return promise
};

/**
 * Updates and returns the item object.
 *
 * @param {Object} item {Item object}
 */
exports.update = function (item) {
    item.modified_date = new Date();
    const promise = Item.findOneAndUpdate({_id: item._id}, item).exec();
    return promise;
};

/**
 * Deletes the item object matching the id.
 *
 * @param {string} itemId {Id of the item object}
 */
exports.delete = function (itemId) {
    const promise = Item.remove({_id: itemId});
    return promise;
};