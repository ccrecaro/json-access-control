import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { CombinerParameters } from './CombinerParameters';
import { CombinerParameter } from './CombineParameter';

@JsonObject()
export class PolicySetCombinerParameters extends CombinerParameters {
    @JsonProperty({name: 'PolicySetIdRef', required: true})
    private _policySetIdRef: string;

    constructor(policySetIdRef: string,
        combinerParameter: CombinerParameter[]) {
        super(combinerParameter);
        this._policySetIdRef = policySetIdRef;
    }

    public get policySetIdRef() {
        return this._policySetIdRef;
    }

    public set policySetIdRef(id: string) {
        this._policySetIdRef = id;
    }
}