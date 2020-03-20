'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for item object.
 */
let ItemSchema = new Schema({
    /**
     * Title of the item.
     */
    jobName: {
        type: String,
        required: "Job Name is required"
    },
    /**
     * item status.
     */
    status: {
        type: String,
        required: "Status is required"
    },
    /**
     * item created date.
     */
    createdDate: {
        type: Date,
        default: Date.now
    },
    /**
     * Last modified date.
     */
    modifiedDate: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});
// Duplicate the id field as mongoose returns _id field instead of id.
ItemSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ItemSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('items', ItemSchema);