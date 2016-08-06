# typescript_node_module_example

How to build a typescript library for just install npm -i and extend their classes.

## What to expect with this example?

```javascript
// $ npm install animal_module

// app.ts file
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
```

## Expected result

```bash
$ node app.js
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```

## Notes

- All .js files are automatically generated (check tsconfig.json)
