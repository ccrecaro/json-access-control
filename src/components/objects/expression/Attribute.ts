import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { RequestCtx } from '../architecture/context/RequestCtx';
import { Expression } from './Expression';
import { EvaluationResult } from '../result/EvaluationResult';

@JsonObject()
export class Attribute implements Expression {
    @JsonProperty({name: 'AttributeId', required: true})
    private _attributeId: string;

    @JsonProperty({name: 'Value', required: true})
    private _value: valueType;

    @JsonProperty({name: 'DataType', required: true})
    private _dataType: string = "string";

    @JsonProperty({name: 'Issuer', required: false})
    private _issuer?: string;
    
    @JsonProperty({name: 'IncludeInResult', required: false})
    private _includeInResult?: boolean;

    constructor(
        attributeId: string,
        value: valueType,
        dataType: string = "string",
        issuer?: string,
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

    public evaluate(request: RequestCtx): EvaluationResult|null {
        return new EvaluationResult(false, this._value, this._dataType, null, null);
    }

    public isSearchedAttribute(type: string, id: string, issuer: string): boolean {
        console.log(`isSearchedAttribute: ${type}, ${id}, ${issuer}`);
        console.log(`attribute: ${this._dataType}, ${this._attributeId}, ${this._issuer}`)

        return this._dataType === type &&
            this._attributeId === id &&
            (this._issuer === issuer || (this._issuer === undefined && issuer === ""));
    }   
}