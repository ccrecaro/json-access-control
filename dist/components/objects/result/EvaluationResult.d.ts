import { Status } from "../Status";
export declare class EvaluationResult {
    _isIndeterminate: boolean;
    _value: valueType;
    _dataType: string;
    _status: Status | null;
    _matchResult: MatchResult | null;
    constructor(isIndeterminate: boolean, value: valueType, dataType: string, status: Status | null, matchResult: MatchResult | null);
    get matchResult(): MatchResult | null;
    set matchResult(result: MatchResult | null);
    get isIndeterminate(): boolean;
    set isIndeterminate(isInd: boolean);
    get value(): valueType;
    set value(value: valueType);
    get dataType(): string;
    set dataType(dataType: string);
    get status(): Status | null;
    set status(status: Status | null);
}
