import { CombinerParameter } from "./CombineParameter";
import { CombinerParameters } from "./CombinerParameters";
export declare class PolicyCombinerParameters extends CombinerParameters {
    private _policyIdRef;
    constructor(policyIdRef: string, combinerParameter: CombinerParameter[]);
    get policyIdRef(): string;
    set policyIdRef(id: string);
}
