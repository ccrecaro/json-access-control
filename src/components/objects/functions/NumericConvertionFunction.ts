import { DOUBLE, INTEGER } from "../../../constants/DataTypes";
import { DOUBLE_TO_INTEGER, INTEGER_TO_DOUBLE } from "../../../constants/Functions";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { Expression } from "../expression/Expression";
import { EvaluationResult } from "../result/EvaluationResult";
import { BaseFunction } from "./BaseFunction";

export class NumericConvertionFunction extends BaseFunction {

    constructor(functionId: string) {
        super(functionId);
    }

    public evaluateFunction(inputs: Expression[], request: RequestCtx): EvaluationResult|null {
        var argValues: valueType[] = new Array(inputs.length);
        var result: EvaluationResult | null = this.evalArgs(inputs, request, argValues);
        
        if (result != null)
            return result;

        var arg: number = <number>argValues[0];

        switch(this.functionId) {
            case DOUBLE_TO_INTEGER:
                return new EvaluationResult(false, arg, INTEGER, null, null);
            case INTEGER_TO_DOUBLE:
                return new EvaluationResult(false, arg, DOUBLE, null, null);
            default: 
                return result;
        }
    }

}