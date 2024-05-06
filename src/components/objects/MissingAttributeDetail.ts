import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { valueType } from '../../utils/types/valueType';

@JsonObject()
export class MissingAttributeDetail {
    @JsonProperty({name: 'AttributeId', required: true})
    private _attributeId: string;
    
    @JsonProperty({name: 'Category', required: true})
    private _category: string
    
    @JsonProperty({name: 'Value', required: false})
    private _value?: valueType;
    
    @JsonProperty({name: 'Issuer', required: false})
    private _issuer?: string;
    
    @JsonProperty({name: 'DataType', required: false})
    private _dataType?: string;

    constructor(attributeId: string,
        category: string,
        value?: valueType,
        issuer?: string,
        dataType?: string) {

            this._attributeId = attributeId;
            this._category = category;
            this._value = value;
            this._issuer = issuer;
            this._dataType = dataType;
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

    public getValue() {
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
}