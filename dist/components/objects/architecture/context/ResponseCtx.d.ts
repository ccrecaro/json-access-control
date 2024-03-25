import { Result } from "../../Result";
export declare class ResponseCtx implements Ctx {
    private _result;
    constructor(result: Result[]);
    get result(): Result[];
    set result(results: Result[]);
}
