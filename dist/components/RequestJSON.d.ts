declare class RequestJSON {
    private _returnPolicyIdList;
    private _combinedDecision;
    private _xPathVersion?;
    private _category?;
    constructor(returnPolicyIdList?: boolean, combinedDecision?: boolean, xPathVersion?: string, category?: Category[]);
    get returnPolicyIdList(): boolean;
    set returnPolicyIdList(shouldReturn: boolean);
    get combinedDecision(): boolean;
    set combinedDecision(isCombinedDecision: boolean);
    getXPathVersion(): string | undefined;
    set xPathVersion(version: string);
    getCategory(): Category[] | undefined;
    set category(categories: Category[]);
}
