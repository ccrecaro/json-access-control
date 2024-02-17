class PolicyCombinerParameters extends CombinerParameters {
    private _policyIdRef: string;

    constructor(policyIdRef: string,
        combinerParameter: CombinerParameter[]) {
        super(combinerParameter);
        this._policyIdRef = policyIdRef;
    }

    public get policyIdRef() {
        return this._policyIdRef;
    }

    public set policyIdRef(id: string) {
        this._policyIdRef = id;
    }
}