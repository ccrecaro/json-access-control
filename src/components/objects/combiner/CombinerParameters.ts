class CombinerParameters {
    private _combinerParameter: CombinerParameter[];

    constructor(combinerParameter: CombinerParameter[]) {
        this._combinerParameter = combinerParameter;
    }

    public get combinerParameter() {
        return this._combinerParameter;
    }

    public set combinerParameter(combinerParameters: CombinerParameter[]) {
        this._combinerParameter = combinerParameters;
    }
}