declare abstract class MatchCreator {
    private _matchId;
    private _value?;
    private _dataType?;
    private _xPathCategory?;
    constructor(matchId: string, value?: valueType, dataType?: string, xPathCategory?: string);
    get matchId(): string;
    set matchId(id: string);
    getValue(): valueType | undefined;
    set value(value: valueType);
    getDataType(): string | undefined;
    set dataType(dataType: string);
    getXPathCategory(): string | undefined;
    set xPathCategory(xPathCategory: string);
    evaluate(values: string[], dataTypes: string[], request: Request): EvaluationResult;
}
