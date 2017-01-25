
const EventView = require('./views/event');
const EventList = require('./models/eventlist');
//const EventModel = require('./models/event');

window.addEventListener('load', () => {
    //const event = new EventModel();
    const list = new EventList();

    // when we create view it needs this.el and this.model to do it's job
    // this is when we assign those
    const view = new EventView({
        el: document.querySelector('body'),
        model: list,
    });
    view.render();
});
