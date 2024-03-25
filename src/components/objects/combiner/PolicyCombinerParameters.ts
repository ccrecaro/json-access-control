import { CombinerParameter } from "./CombineParameter";
import { CombinerParameters } from "./CombinerParameters";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export class PolicyCombinerParameters extends CombinerParameters {
    @JsonProperty({name: 'PolicyIdRef', required: true})
    private _policyIdRef: string;

    constructor(policyIdRef: string,
        combinerParameter: CombinerParameter[]) {
        super(combinerParameter);
        this._policyIdRef = policyIdRef;
    }

    public get policyIdRef() {
        return this._policyIdRef;
    }

    public set policyIdRef(id: string) {
        this._policyIdRef = id;
    }
}