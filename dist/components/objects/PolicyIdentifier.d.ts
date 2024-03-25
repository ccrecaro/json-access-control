import { IdReference } from "./IdReference";
export declare class PolicyIdentifier {
    private _policyIdReference?;
    private _policySetIdReference?;
    constructor(policyIdReference?: IdReference[], policySetIdReference?: IdReference[]);
    getPolicyIdReference(): IdReference[] | undefined;
    set policyIdReference(policyIdReferences: IdReference[]);
    getPolicySetIdReference(): IdReference[] | undefined;
    set policySetIdReference(policySetIdReferences: IdReference[]);
}
