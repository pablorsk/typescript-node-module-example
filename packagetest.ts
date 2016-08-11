/*
    If you like more specific...
*/
// import { Animal } from 'animal_module';
// class Snake extends Animal {

import * as animal_module from './src/animal';

class Snake extends animal_module.Animal {

    constructor(name: string) { super(name); }

    move(distanceInMeters: number = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}

let sam = new Snake('Sammy the Python');
sam.move();

import { Things } from './src/animal';
let mybox = new Things.Box();
console.log('mybox size:',  mybox.size);
