import { RequestCtx } from "../architecture/context/RequestCtx";
import { AnyOf } from "./AnyOf";
export declare class Target {
    private _anyOf;
    constructor(anyOf: AnyOf[]);
    get anyOf(): AnyOf[];
    set anyOf(value: AnyOf[]);
    match(request: RequestCtx): MatchResult;
}
