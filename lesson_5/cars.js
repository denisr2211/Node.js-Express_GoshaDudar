let events = require('events');
let util = require('util');

let Cars = function (model) { // constructor
    this.model = model;
};

util.inherits(Cars, events.EventEmitter);

let bmw = new Cars('BMW');
let audi = new Cars('Audi');
let volvo = new Cars('Volvo');

let cars = [bmw, audi, volvo];
cars.forEach(function (car) {
    car.on('speed', function (text) {
        console.log(car.model + " speed is - " + text);
    });
});

bmw.emit('speed', '254.5 km');
volvo.emit('speed', '199 km');
audi.emit('speed', '215 km');
