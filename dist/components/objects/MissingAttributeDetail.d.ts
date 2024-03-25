export declare class MissingAttributeDetail {
    private _attributeId;
    private _category;
    private _value?;
    private _issuer?;
    private _dataType?;
    constructor(attributeId: string, category: string, value?: valueType, issuer?: string, dataType?: string);
    get attributeId(): string;
    set attributeId(id: string);
    get category(): string;
    set category(category: string);
    getValue(): valueType | undefined;
    set value(value: valueType);
    getIssuer(): string | undefined;
    set issuer(issuer: string);
    getDataType(): string | undefined;
    set dataType(dataType: string);
}
