export class Animal {
    name: string = 'a';
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// things.ts
export module Things {
    export interface IParams {
        size: Number;
        another_param?: Number;
    }
}

// export default Things;
export module Things {
    export class Box implements IParams {
        public size: number = 5;
    }
}
