class Bag {
    private _values: valueType[];

    constructor(values: valueType[]) {
        this._values = values;
    }

    public get values(): valueType[] {
        return this._values;
    }

    public isBagEmpty(): boolean {
        return this._values.length === 0;
    }
}