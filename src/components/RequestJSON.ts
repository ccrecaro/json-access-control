class RequestJSON {
    private _returnPolicyIdList: boolean;
    private _combinedDecision: boolean;
    private _xPathVersion?: string;
    private _category?: Category[];

    // si el xPath no existe pasar un undefined
    constructor(returnPolicyIdList: boolean = false,
            combinedDecision: boolean = false,
            xPathVersion?: string,
            category?: Category[]) {

        this._returnPolicyIdList = returnPolicyIdList;
        this._combinedDecision = combinedDecision;
        this._xPathVersion = xPathVersion;
        this._category = category;
    }


    public get returnPolicyIdList() {
        return this._returnPolicyIdList;
    }

    public set returnPolicyIdList(shouldReturn: boolean) {
        this._returnPolicyIdList = shouldReturn;
    }

    public get combinedDecision() {
        return this._combinedDecision;
    }

    public set combinedDecision(isCombinedDecision: boolean) {
        this._combinedDecision = isCombinedDecision;
    }

    public getXPathVersion() {
        return this._xPathVersion; 
    }

    public set xPathVersion(version: string) {
        this._xPathVersion = version;
    }

    public getCategory() {
        return this._category || undefined;
    }

    public set category(categories: Category[]) {
        this._category = categories;
    }


}