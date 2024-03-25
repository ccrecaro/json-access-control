import { RequestCtx } from '../architecture/context/RequestCtx';
import { Match } from '../match/Match';
export declare class AllOf {
    private _matches;
    constructor(matches: Match[]);
    get matches(): Match[];
    set matches(matches: Match[]);
    match(request: RequestCtx): MatchResult;
}
