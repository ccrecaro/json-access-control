class AttributeDesignator implements Expression {
    private _attributeId: string;
    private _category: string;
    private _dataType: string;
    private _mustBePresent: boolean;
    private _issuer?: string;

    constructor(attributeId: string,
        category: string,
        dataType: string,
        mustBePresent: boolean,
        issuer?: string) {

            this._attributeId = attributeId;
            this._category = category;
            this._dataType = dataType;
            this._mustBePresent = mustBePresent;
            this._issuer = issuer;
    }
    public get attributeId() {
        return this._attributeId;
    }

    public set attributeId(id: string) {
        this._attributeId = id;
    }
    
    public get category() {
        return this._category;
    }

    public set category(category: string) {
        this._category = category;
    }

    public getIssuer() {
        return this._issuer;
    }

    public set issuer(issuer: string) {
        this._issuer = issuer;
    }

    public get dataType() {
        return this._dataType;
    }

    public set dataType(dataType: string) {
        this._dataType = dataType;
    }

    public get mustBePresent() {
        return this._mustBePresent;
    }

    public set mustBePresent(mustBePresent: boolean) {
        this._mustBePresent = mustBePresent;
    }

    public execute(): void {
        
    }
}