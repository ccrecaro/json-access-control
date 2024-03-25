import { CombinerParameter } from "./CombineParameter";
import { CombinerParameters } from "./CombinerParameters";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export class RuleCombinerParameters extends CombinerParameters {
    @JsonProperty({name: 'RuleIdRef', required: true})
    private _ruleIdRef: string;

    constructor(ruleIdRef: string,
        combinerParameter: CombinerParameter[]) {
        super(combinerParameter);
        this._ruleIdRef = ruleIdRef;
    }

    public get ruleIdRef() {
        return this._ruleIdRef;
    }

    public set ruleIdRef(id: string) {
        this._ruleIdRef = id;
    }
}