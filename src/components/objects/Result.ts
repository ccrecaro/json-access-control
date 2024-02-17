class Result {
    private _decision: string;
    private _status?: Status;
    private _obligations?: ObligationOrAdvice[];
    private _associatedAdvice?: ObligationOrAdvice[];
    private _category?: Category | Category[];
    private _policyIdentifierList?: PolicyIdentifier[];

    constructor(decision: string,
            status?: Status,
            obligations?: ObligationOrAdvice[],
            associatedAdvice?: ObligationOrAdvice[],
            category?: Category | Category[],
            policyIdentifierList?: PolicyIdentifier[]) {
        
        this._decision = decision;
        this._status = status;
        this._obligations = obligations;
        this._associatedAdvice = associatedAdvice;
        this._category = category;
        this._policyIdentifierList = policyIdentifierList;     
    }

    public get decision() {
        return this._decision;
    }

    public set decision(decision: string) {
        this._decision = decision;
    }

    public getStatus() {
        return this._status;
    }

    public set status(status: Status) {
        this._status = status;
    }

    public getObligations() {
        return this._obligations;
    }

    public set obligations(obligations: ObligationOrAdvice[]) {
        this._obligations = obligations;
    }
    
    public getAssociatedAdvice() {
        return this._associatedAdvice;
    }

    public set associatedAdvice(advices: ObligationOrAdvice[]) {
        this._associatedAdvice = advices;
    }

    public getCategory() {
        return this._category;
    }

    public set category(category: Category | Category[]) {
        this._category = category;
    }

    public getPolicyIdentifierList() {
        return this._policyIdentifierList;
    }

    public set policyIdentifierList(policyIdentifierList: PolicyIdentifier[]) {
        this._policyIdentifierList = policyIdentifierList;
    }

}