
module.exports = Backbone.View.extend({
    initialize() {
        this.model.on('change', this.render, this);
        this.model.on('add', this.render, this);
        this.model.on('remove', this.render, this);
    },
    events: {
        'click #go': 'updateEvent',
    },
    updateEvent() {
        const newName = this.el.querySelector('#name').value;
        //this.model.changeName(newName);

        this.model.createNew(newName);
    },
    render() {
        const template = document.querySelector('#event-template').innerHTML;

        // const event = this.el.querySelector('#list-events h2');
        // event.textContent = this.model.get('name');
        // console.log(event);

        // in collection we need a way to get the models themselves
        // accesible through property called 'models'
        this.el.querySelector('#list-events').innerHTML = '';
        for (let i = 0; i < this.model.models.length; i++) {
            const m = this.model.models[i];

            const li = document.createElement('li');
            //li.textContent = m.get('name');
            li.innerHTML = Mustache.render(
                template,
                {
                    name: m.get('name'),
                    attendees: m.get('attendees'),
                    date: m.get('when'),
                }
            );

           const button = li.querySelector('.remove');
           button.addEventListener('click', () => {
               console.log('clicked on ' + m.get('name'));
               this.model.remove(m);
           });

            const parent = this.el.querySelector('#list-events');
            parent.appendChild(li);
        }
    },
});