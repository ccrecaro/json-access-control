import { MatchResult } from "../../../enums/MatchResult";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { AnyOf } from "./AnyOf";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export class Target {
    @JsonProperty({name: 'AnyOf', type: AnyOf, required: true})
    private _anyOf: AnyOf[];
    
    constructor(anyOf: AnyOf[]) {
        this._anyOf = anyOf;
    }
    
    get anyOf(): AnyOf[] {
        return this._anyOf;
    }
    
    set anyOf(value: AnyOf[]) {
        this._anyOf = value;
    }

    public match(request: RequestCtx): MatchResult {
        var firstIndeterminateStatus: MatchResult|null = null;

        //let location of this._policiesLocation
        for (let anyOfElem of this._anyOf) {
            let result: MatchResult = anyOfElem.match(request);
            if (result == MatchResult.NO_MATCH){
                return result;
            } else if(result == MatchResult.INDETERMINATE){
                if(firstIndeterminateStatus == null){
                    firstIndeterminateStatus = result;    
                }
            }
        }

        if(firstIndeterminateStatus == null){
            return MatchResult.MATCH;
        } else {
            return MatchResult.INDETERMINATE;
        }
    }
}