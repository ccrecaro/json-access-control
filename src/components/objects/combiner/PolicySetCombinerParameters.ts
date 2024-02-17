class PolicySetCombinerParameters extends CombinerParameters {
    private _policySetIdRef: string;

    constructor(policySetIdRef: string,
        combinerParameter: CombinerParameter[]) {
        super(combinerParameter);
        this._policySetIdRef = policySetIdRef;
    }

    public get policySetIdRef() {
        return this._policySetIdRef;
    }

    public set policySetIdRef(id: string) {
        this._policySetIdRef = id;
    }
}