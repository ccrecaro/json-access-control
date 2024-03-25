import { Status } from "../Status";

export class EvaluationResult {
    _isIndeterminate: boolean;
    _value: valueType;
    _dataType: string;
    _status: Status|null;
    _matchResult: MatchResult|null;

    constructor(isIndeterminate: boolean,
        value: valueType,
        dataType: string,
        status: Status|null,
        matchResult: MatchResult|null) {

            this._isIndeterminate = isIndeterminate;
            this._value = value;
            this._dataType = dataType;
            this._status = status;
            this._matchResult = matchResult;
    }


    public get matchResult() {
        return this._matchResult;
    }

    public set matchResult(result: MatchResult|null) {
        this._matchResult = result;
    }

    public get isIndeterminate() {
        return this._isIndeterminate;
    }

    public set isIndeterminate(isInd: boolean) {
        this._isIndeterminate = isInd;
    }

    public get value() {
        return this._value;
    }

    public set value(value: valueType) {
        this._value = value;
    }

    public get dataType() {
        return this._dataType;
    }

    public set dataType(dataType: string) {
        this._dataType = dataType;
    }

    public get status() {
        return this._status;
    }

    public set status(status: Status|null) {
        this._status = status;
    }

}