export declare class Animal {
    name: string;
    constructor(theName: string);
    move(distanceInMeters?: number): void;
}
export declare module Things {
    interface IParams {
        size: Number;
        another_param?: Number;
    }
}
export declare module Things {
    class Box implements IParams {
        size: number;
    }
}
