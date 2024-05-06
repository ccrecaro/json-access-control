import { AttributeSelector } from "../expression/AttributeSelector";
import { AttributeDesignator } from "../expression/AttributeDesignator";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { RequestCtx } from "../architecture/context/RequestCtx";
import { Status } from "../Status";
import { EvaluationResult } from "../result/EvaluationResult";
import { FunctionEx } from "../expression/FunctionEx";
import { Expression } from "../expression/Expression";
import { MatchResult } from "../../../enums/MatchResult";
import { valueType } from "../../../utils/types/valueType";

@JsonObject()
export class Match {
    @JsonProperty({name: 'MatchId', required: true})
    private _matchId: string; //esto entrega la funcion a aplicar
    @JsonProperty({name: 'AttributeDesignator', type: AttributeDesignator, required: true})
    private _evaluator: AttributeDesignator /*| AttributeSelector*/;
    @JsonProperty({name: 'Value', required: false})
    private _value?: valueType;
    @JsonProperty({name: 'DataType', required: false})
    private _dataType?: string;
    @JsonProperty({name: 'XPathCategory', required: false})
    private _xPathCategory?: string;

    constructor(matchId: string,
        evaluator: AttributeDesignator/*| AttributeSelector*/,
        value?: valueType,
        dataType?: string,
        xPathCategory?: string) {
            this._matchId = matchId;
            this._evaluator = evaluator;
            this._value = value;
            this._dataType = dataType;
            this._xPathCategory = xPathCategory;
    }

    public get matchId() {
        return this._matchId;
    }

    public set matchId(id: string) {
        this._matchId = id;
    }

    public getValue() {
        return this._value;
    }

    public set value(value: valueType) {
        this._value = value;
    }

    public getDataType() {
        return this._dataType;
    }

    public set dataType(dataType: string) {
        this._dataType = dataType
    }

    public getXPathCategory() {
        return this._xPathCategory;
    }

    public set xPathCategory(xPathCategory: string) {
        this._xPathCategory = xPathCategory;
    }

    public getEvaluator() {
        return this._evaluator;
    }

    public set evaluator(evaluator: AttributeDesignator/*| AttributeSelector*/) {
        this._evaluator = evaluator;
    }

    public match(request: RequestCtx): MatchResult {
        var atLeastOneError: boolean = false;
        var result: EvaluationResult|null = this._evaluator.evaluate(request);

        if(result){
            if (result.isIndeterminate) {
                return MatchResult.INDETERMINATE;
            }
    
            var resultValue: valueType = this._value? this._value : []; //recordar que pueden ser arrays
            var bag = Array.isArray(resultValue) ? resultValue: [resultValue]; 
    
            if(bag.length!=0) {
                let atLeastOneError: boolean = false;
                let firstIndeterminateStatus: Status|null = null;
    
                for (let element of bag) {
                    let inputs: Expression[] = [this._evaluator, element];
                    let match: MatchResult = this.evaluateMatch(inputs, request);
                    
                    // we only need one match for this whole thing to match
                    if (match == MatchResult.MATCH) {
                        return match;
                    }
    
                    // if it was INDETERMINATE, we want to remember for later
                    if (match == MatchResult.INDETERMINATE) {
                        atLeastOneError = true;
                    }
                }
    
                // if we got here, then nothing matched, so we'll either return
                // INDETERMINATE or NO_MATCH
                if (atLeastOneError)
                    return MatchResult.INDETERMINATE;
                else
                    return MatchResult.NO_MATCH;
    
            } else {
                return MatchResult.NO_MATCH;
            }
        }
        return MatchResult.ERROR;
    }

    public evaluateMatch(inputs: Expression[], request: RequestCtx): MatchResult {
        // first off, evaluate the function
        var fnc: FunctionEx = new FunctionEx(this._matchId);
        var result: EvaluationResult|null = fnc.evaluateFunction(inputs, request);
        var bool: boolean = false;

        // if it was indeterminate, then that's what we return immediately
        if (result && result.isIndeterminate)
            return MatchResult.INDETERMINATE;

        // otherwise, we figure out if it was a match
        if(result && typeof result.value == "boolean") {
            bool = result.value;
        }

        if (bool)
            return MatchResult.MATCH;
        else
            return MatchResult.NO_MATCH;
    }




}