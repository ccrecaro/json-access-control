import { STRING } from "../../../constants/DataTypes";
import { STRING_NORMALIZE_SPACE, STRING_NORMALIZE_TO_LOWER_CASE } from "../../../constants/Functions";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { Expression } from "../expression/Expression";
import { EvaluationResult } from "../result/EvaluationResult";
import { BaseFunction } from "./BaseFunction";

export class StringNormalizeFunction extends BaseFunction {

    constructor(functionId: string) {
        super(functionId);
    }

    public evaluateFunction(inputs: Expression[], request: RequestCtx): EvaluationResult|null {
        var argValues: valueType[] = new Array(inputs.length);
        var result: EvaluationResult | null = this.evalArgs(inputs, request, argValues);
        
        if (result != null)
            return result;

        var str: string = <string>argValues[0];

        switch(this.functionId) {
            case STRING_NORMALIZE_SPACE:
                return new EvaluationResult(false, str.trim(), STRING, null, null);
            case STRING_NORMALIZE_TO_LOWER_CASE:
                return new EvaluationResult(false, str.toLowerCase(), STRING, null, null);
            default: 
                return result;
        }
    }

}