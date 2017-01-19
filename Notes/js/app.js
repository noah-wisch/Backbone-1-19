
window.addEventListener('load', () => {
    //kingdom the view is in charge of
    //all elements within this element are solely controlled by this view
    let ingredients = new IngredientsModel();

    let mainView = new IngredientsView({ // el = element
        el: document.querySelector('body'),
        model: ingredients, // model = model to update when things change
    });
});

/**
 * MVC - Technique for Organizing Code
 * Model: everything related to data
 * View: how the data looks to users
 * Controller: a seperate 'layer' that keeps the M and V from each other...
 * 
 * Separation of Concerns:
 *  - big applications gety WAY harder if everything is related to everything else
 *  - you can avoid this by somehow 'separating' similar things from unrelated
 */

//Creat a model:
let IngredientsModel = Backbone.Model.extend({
    //built-in to Bb - starting values for each property
    defaults: {
        peas: 100,
    },
    increasePeas() {
        // this.get('peas', this.get('peas') + 1);
        // this.send('peas', 5);
        this.set('peas', this.get('peas') + 1);
    },
});

//View for displaying/interacting w/ model
let IngredientsView = Backbone.View.extend({
    // what should happen at the beginning
    initialize() {
        this.model.on('change', this.render, this);
    },
    // events set up
    events: {
        'click #more-peas': 'addPea',
    },

    addPea() {
        console.log('peas, love em')
        this.model.increasePeas();
    },

    // not required, but I always make it
    render() {
        let button = this.el.querySelector('#more-peas');
        button.textContent = this.model.get('peas');
    },
});