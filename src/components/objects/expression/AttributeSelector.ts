import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { RequestCtx } from '../architecture/context/RequestCtx';
import { Expression } from './Expression';
import { EvaluationResult } from '../result/EvaluationResult';

@JsonObject()
export class AttributeSelector implements Expression{
    @JsonProperty({name: 'Category', required: true})
    private _category: string;
    @JsonProperty({name: 'Path', required: true})
    private _path: string;
    @JsonProperty({name: 'DataType', required: true})
    private _dataType: string;
    @JsonProperty({name: 'MustBePresent', required: true})
    private _mustBePresent: boolean = false;
    @JsonProperty({name: 'ContextSelectorId', required: false})
    private _contextSelectorId?: string;

    constructor(category: string,
        path: string,
        dataType: string,
        mustBePresent: boolean,
        contextSelectorId?: string) {

            this._category = category;
            this._path = path;
            this._dataType = dataType;
            this._mustBePresent = mustBePresent;
            this._contextSelectorId = contextSelectorId;
    }

    public get category() {
        return this._category;
    }

    public set category(category: string) {
        this._category = category;
    }

    public get path() {
        return this._path;
    }

    public set path(path: string) {
        this._path = path;
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

    public getContextSelectorId() {
        return this._contextSelectorId;
    }

    public set contextSelectorId(id: string) {
        this._contextSelectorId = id;
    }

    public evaluate(request: RequestCtx): EvaluationResult | null {
        return null
    }

    /*
    public evaluate(request: RequestCtx): EvaluationResult {
        const result: EvaluationResult = request.getAttributeWithType(this.dataType, this._category.);

        if(!result.isIndeterminate) {
            var resultValue: valueType = result.value; //recordar que pueden ser arrays
            var bag = Array.isArray(resultValue) ? resultValue: [resultValue]; 
            
            if(bag.length == 0) {
                if(this._mustBePresent) {
                    const message: string = `couldn't resolve XPath expression ${this._path} for type ${this._dataType}`;
                    let code: string = STATUS_MISSING_ATTRIBUTE;
                    let statusCode = new StatusCode(code, undefined);
                    let status: Status = new Status(message, message, statusCode);

                    result.isIndeterminate = true;
                    result.matchResult = MatchResult.INDETERMINATE;
                    result.status = status;

                    return result;
                } else {
                    return result; //Retorna el resultado vacio
                }
            }
            return result;
        } else {
            return result;
        }
    }
    */
}