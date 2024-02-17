class Attribute implements Expression{
    private _attributeId: string;
    private _value: valueType;
    private _issuer?: string;
    private _dataType?: string;
    private _includeInResult?: boolean;

    constructor(
        attributeId: string,
        value: valueType,
        issuer?: string,
        dataType?: string,
        includeInResult?: boolean
    ) {
        this._attributeId = attributeId;
        this._value = value;
        this._issuer = issuer;
        this._dataType = dataType;
        this._includeInResult = includeInResult;
    }

    public get attributeId() {
        return this._attributeId;
    }

    public set attributeId(id: string) {
        this._attributeId = id;
    }

    public get value() {
        return this._value;
    }

    public set value(value: valueType) {
        this._value = value;
    }

    public getIssuer() {
        return this._issuer;
    }

    public set issuer(issuer: string) {
        this._issuer = issuer;
    }

    public getDataType() {
        return this._dataType;
    }

    public set dataType(dataType: string) {
        this._dataType = dataType;
    }

    public getIncludeInResult() {
        return this._includeInResult;
    }

    public set includeInResult(include: boolean) {
        this._includeInResult = include;
    }

    public execute(): void {
        
    }
}