import { RequestCtx } from '../architecture/context/RequestCtx';
import { Match } from '../match/Match'
import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export class AllOf {
    @JsonProperty({name: 'Match', required: true})
    private _matches: Match[];

    constructor(matches: Match[]) {
        this._matches = matches;
    }

    public get matches() {
        return this._matches;
    }

    public set matches(matches: Match[]) {
        this._matches = matches;
    }

    public match(request: RequestCtx): MatchResult {
        var firstIndeterminateStatus: MatchResult|null = null;
        var result: MatchResult;

        for (let match of this._matches) {
            let result: MatchResult = match.match(request);
            // at least one no match
            if (result == MatchResult.NO_MATCH){
                return result;
            }

            if (result == MatchResult.INDETERMINATE){
                if(firstIndeterminateStatus == null){
                    firstIndeterminateStatus = result;
                }
            }
        }

        // all matches
        if (firstIndeterminateStatus == null)
            return MatchResult.MATCH;
        else
            return MatchResult.INDETERMINATE;
    }
}