import { MatchResult } from "../../../enums/MatchResult";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { AllOf } from "./AllOf";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export class AnyOf {
    @JsonProperty({name: 'AllOf', type: AllOf, required: true})
    private _allOf: AllOf[];

    constructor(allOf: AllOf[]) {
        this._allOf = allOf;
    }

    public get allOf() {
        return this._allOf;
    }

    public set allOf(allOf: AllOf[]) {
        this._allOf = allOf;
    }

    public match(request: RequestCtx): MatchResult {
        var firstIndeterminateStatus: MatchResult|null = null;

        for (let group of this._allOf) {
            let result: MatchResult = group.match(request);

            // One match
            if (result == MatchResult.MATCH){
                return result;
            }
            //somethins is indeterminate
            if (result == MatchResult.INDETERMINATE) {
                if (firstIndeterminateStatus == null)
                    firstIndeterminateStatus = result;
            }
        }

        // no matches
        if (firstIndeterminateStatus == null){
            return MatchResult.NO_MATCH;
        } else { // at least one indeterminate over all no matches
            return MatchResult.INDETERMINATE;
        }    
    }
}