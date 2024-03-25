import { AttributeDesignator } from "../expression/AttributeDesignator";
import { RequestCtx } from "../architecture/context/RequestCtx";
export declare abstract class Match {
    private _matchId;
    private _evaluator;
    private _value?;
    private _dataType?;
    private _xPathCategory?;
    constructor(matchId: string, evaluator: AttributeDesignator, value?: valueType, dataType?: string, xPathCategory?: string);
    get matchId(): string;
    set matchId(id: string);
    getValue(): valueType | undefined;
    set value(value: valueType);
    getDataType(): string | undefined;
    set dataType(dataType: string);
    getXPathCategory(): string | undefined;
    set xPathCategory(xPathCategory: string);
    getEvaluator(): AttributeDesignator;
    set evaluator(evaluator: AttributeDesignator);
    match(request: RequestCtx): MatchResult;
    evaluateMatch(inputs: valueType, request: RequestCtx): MatchResult;
}
