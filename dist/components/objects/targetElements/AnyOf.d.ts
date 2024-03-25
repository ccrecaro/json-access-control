import { RequestCtx } from "../architecture/context/RequestCtx";
import { AllOf } from "./AllOf";
export declare class AnyOf {
    private _allOf;
    constructor(allOf: AllOf[]);
    get allOf(): AllOf[];
    set allOf(allOf: AllOf[]);
    match(request: RequestCtx): MatchResult;
}
