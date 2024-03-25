import { CombinerParameters } from './CombinerParameters';
import { CombinerParameter } from './CombineParameter';
export declare class PolicySetCombinerParameters extends CombinerParameters {
    private _policySetIdRef;
    constructor(policySetIdRef: string, combinerParameter: CombinerParameter[]);
    get policySetIdRef(): string;
    set policySetIdRef(id: string);
}
