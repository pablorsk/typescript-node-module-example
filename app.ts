import * as animal_module from 'animal_module';

class Snake extends animal_module.Animal {

    constructor(name: string) { super(name); }

    move(distanceInMeters: number = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}

let sam = new Snake('Sammy the Python');
sam.move();
