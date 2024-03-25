import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { CombinerParameter } from './CombineParameter';

@JsonObject()
export class CombinerParameters {
    @JsonProperty({name: 'CombinerParameters', required: false})
    private _combinerParameter: CombinerParameter[];

    constructor(combinerParameter: CombinerParameter[]) {
        this._combinerParameter = combinerParameter;
    }

    public get combinerParameter() {
        return this._combinerParameter;
    }

    public set combinerParameter(combinerParameters: CombinerParameter[]) {
        this._combinerParameter = combinerParameters;
    }
}