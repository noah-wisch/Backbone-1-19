
module.exports = Backbone.Model.extend({
    defaults: {
        name: 'unknown event',
        when: '2017-10-11',
        attendees: 10,
    },
    changeName(name) {
        this.set('name', name);
    },
});