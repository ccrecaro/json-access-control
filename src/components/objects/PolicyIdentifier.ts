import { IdReference } from "./IdReference";

export class PolicyIdentifier {
    private _policyIdReference?: IdReference[];
    private _policySetIdReference?: IdReference[];

    constructor(policyIdReference?: IdReference[],
            policySetIdReference?: IdReference[]){
        
        this._policyIdReference = policyIdReference;
        this._policySetIdReference = policySetIdReference;
    }

    public getPolicyIdReference() {
        return this._policyIdReference;
    }

    public set policyIdReference(policyIdReferences: IdReference[]) {
        this._policyIdReference = policyIdReferences;
    }

    public getPolicySetIdReference() {
        return this._policySetIdReference;
    }

    public set policySetIdReference(policySetIdReferences: IdReference[]) {
        this._policySetIdReference = policySetIdReferences;
    }
}