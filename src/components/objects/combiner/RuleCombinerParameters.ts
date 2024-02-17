class RuleCombinerParameters extends CombinerParameters {
    private _ruleIdRef: string;

    constructor(ruleIdRef: string,
        combinerParameter: CombinerParameter[]) {
        super(combinerParameter);
        this._ruleIdRef = ruleIdRef;
    }

    public get ruleIdRef() {
        return this._ruleIdRef;
    }

    public set ruleIdRef(id: string) {
        this._ruleIdRef = id;
    }
}