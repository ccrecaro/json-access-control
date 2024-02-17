class ResponseJSON {
    private _result: Result[];

    constructor(result: Result[]) {
        this._result = result
    }

    public get result() {
        return this._result;
    }

    public set result(results: Result[]) {
        this._result = results;
    }
}