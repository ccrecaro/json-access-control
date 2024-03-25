export declare class AttributeAssignment {
    private _attributeId;
    private _value;
    private _category?;
    private _dataType?;
    private _issuer?;
    constructor(attributeId: string, value: valueType, category?: string, dataType?: string, issuer?: string);
    get attributeId(): string;
    set attributeId(id: string);
    get value(): valueType;
    set value(value: valueType);
    getCategory(): string | undefined;
    set category(category: string);
    getDataType(): string | undefined;
    set dataType(dataType: string);
    getIssuer(): string | undefined;
    set issuer(issuer: string);
}
