import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export class AttributeAssignment {
    @JsonProperty({name: 'AttributeId', required: true})
    private _attributeId: string;
    
    @JsonProperty({name: 'Value', required: true})
    private _value: valueType;
    
    @JsonProperty({name: 'Category', required: false})
    private _category?: string;
    
    @JsonProperty({name: 'DataType', required: false})
    private _dataType?: string;
    
    @JsonProperty({name: 'Issuer', required: false})
    private _issuer?: string;

    constructor(attributeId: string,
        value: valueType,
        category?: string,
        dataType?: string,
        issuer?: string) {
            this._attributeId = attributeId;
            this._value = value;
            this._category = category;
            this._dataType = dataType;
            this._issuer = issuer;
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

    public getCategory() {
        return this._category;
    }

    public set category(category: string) {
        this._category = category;
    }

    public getDataType() {
        return this._dataType;
    }

    public set dataType(dataType: string) {
        this._dataType = dataType;
    }

    public getIssuer() {
        return this._issuer;
    }

    public set issuer(issuer: string) {
        this._issuer = issuer;
    }
}