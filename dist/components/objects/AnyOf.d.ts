declare class AnyOf {
    private _allOf;
    constructor(allOf: AllOf[]);
    get allOf(): AllOf[];
    set allOf(allOf: AllOf[]);
}
