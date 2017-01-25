/**
 * Use a collection when your primary data is an array
 */
const EventModel = require('./event');

module.exports = Backbone.Collection.extend({
    // type of model stored in this collection
    // every collection contains some type of model...
    model: EventModel,

    createNew(newName) {
        console.log('creating new model')
        const newEvent = new EventModel();
        newEvent.set('name', newName);
        this.add(newEvent);
    },
});