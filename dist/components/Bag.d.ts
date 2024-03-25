declare class Bag {
    private _values;
    constructor(values: valueType[]);
    get values(): valueType[];
    isBagEmpty(): boolean;
}
