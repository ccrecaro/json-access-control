declare class AttributeDesignator implements Expression {
    private _attributeId;
    private _category;
    private _dataType;
    private _mustBePresent;
    private _issuer?;
    constructor(attributeId: string, category: string, dataType: string, mustBePresent: boolean, issuer?: string);
    get attributeId(): string;
    set attributeId(id: string);
    get category(): string;
    set category(category: string);
    getIssuer(): string | undefined;
    set issuer(issuer: string);
    get dataType(): string;
    set dataType(dataType: string);
    get mustBePresent(): boolean;
    set mustBePresent(mustBePresent: boolean);
    evaluate(request: Request): EvaluationResult;
}
