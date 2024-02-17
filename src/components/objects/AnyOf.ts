class AnyOf {
    private _allOf: AllOf[];

    constructor(allOf: AllOf[]) {
        this._allOf = allOf;
    }

    public get allOf() {
        return this._allOf;
    }

    public set allOf(allOf: AllOf[]) {
        this._allOf = allOf;
    }
}