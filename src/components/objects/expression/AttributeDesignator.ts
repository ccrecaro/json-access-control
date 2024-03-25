import { STATUS_MISSING_ATTRIBUTE } from "../../../constants/Status";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { RequestCtx } from "../architecture/context/RequestCtx";
import { MissingAttributeDetail } from "../MissingAttributeDetail";
import { StatusCode } from "../StatusCode";
import { Status } from "../Status";
import { Expression } from "./Expression";
import { EvaluationResult } from "../result/EvaluationResult";

@JsonObject()
export class AttributeDesignator implements Expression {
    @JsonProperty({name: 'AttributeId', required: true})
    private _attributeId: string;
    @JsonProperty({name: 'Category', required: true})
    private _category: string;
    @JsonProperty({name: 'DataType', required: true})
    private _dataType: string;
    @JsonProperty({name: 'MustBePresent', required: true})
    private _mustBePresent: boolean = false; //recordar seccion 7.3.5
    @JsonProperty({name: 'Issuer', required: true})
    private _issuer: string;

    constructor(attributeId: string,
        category: string,
        dataType: string,
        mustBePresent: boolean,
        issuer: string) {

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

    public evaluate(request: RequestCtx): EvaluationResult | null {
        let result: EvaluationResult;

        // look in  attribute values
        result = request.getAttributeWithType(this._dataType, this._attributeId, this._issuer, this._category);

        // if the lookup was indeterminate, then we return immediately
        if (result.isIndeterminate){
            return result;
        }
        var resultValue: valueType = result.value; //recordar que pueden ser arrays
        var bag = Array.isArray(resultValue) ? resultValue: [resultValue]; 

        // si no existe, debo ver si el campo debe estar presente
        if (bag.length == 0) {
            if (this.mustBePresent) {
                //If MustBePresent is “True”, then a missing attribute SHALL result in “Indeterminate”
                console.log("AttributeDesignator failed to resolve a "
                        + "value for a required attribute: " + this.attributeId);

                let code: string = STATUS_MISSING_ATTRIBUTE;

                let missingAttributes: MissingAttributeDetail[] = [];
                let missingAttribute: MissingAttributeDetail = new MissingAttributeDetail(this.attributeId, this.category,
                                        [], this.issuer, this.dataType);
                missingAttributes.push(missingAttribute);

                const message: string = "Couldn't find AttributeDesignator attribute";
                
                let statusCode = new StatusCode(code, undefined);
                let status: Status = new Status(message, message, statusCode);
                result.isIndeterminate = true;
                result.matchResult = MatchResult.INDETERMINATE;
                result.status = status;

                return result;
            } // si this.mustBePresent == false, retorno la bag vacia
        }

        return result;
    }
}