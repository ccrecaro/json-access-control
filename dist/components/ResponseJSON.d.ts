declare class ResponseJSON {
    private _result;
    constructor(result: Result[]);
    get result(): Result[];
    set result(results: Result[]);
}
