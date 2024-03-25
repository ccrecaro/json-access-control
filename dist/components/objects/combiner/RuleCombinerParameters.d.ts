import { CombinerParameter } from "./CombineParameter";
import { CombinerParameters } from "./CombinerParameters";
export declare class RuleCombinerParameters extends CombinerParameters {
    private _ruleIdRef;
    constructor(ruleIdRef: string, combinerParameter: CombinerParameter[]);
    get ruleIdRef(): string;
    set ruleIdRef(id: string);
}
