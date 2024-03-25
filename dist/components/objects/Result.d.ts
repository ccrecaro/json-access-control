import { Category } from "./Category";
import { ObligationOrAdvice } from "./ObligationOrAdvice";
import { Status } from "./Status";
import { PolicyIdentifier } from "./PolicyIdentifier";
export declare class Result {
    private _decision;
    private _status?;
    private _obligations?;
    private _associatedAdvice?;
    private _category?;
    private _policyIdentifierList?;
    constructor(decision: string, status?: Status, obligations?: ObligationOrAdvice[], associatedAdvice?: ObligationOrAdvice[], category?: Category | Category[], policyIdentifierList?: PolicyIdentifier[]);
    get decision(): string;
    set decision(decision: string);
    getStatus(): Status | undefined;
    set status(status: Status);
    getObligations(): ObligationOrAdvice[] | undefined;
    set obligations(obligations: ObligationOrAdvice[]);
    getAssociatedAdvice(): ObligationOrAdvice[] | undefined;
    set associatedAdvice(advices: ObligationOrAdvice[]);
    getCategory(): Category | Category[] | undefined;
    set category(category: Category | Category[]);
    getPolicyIdentifierList(): PolicyIdentifier[] | undefined;
    set policyIdentifierList(policyIdentifierList: PolicyIdentifier[]);
}
