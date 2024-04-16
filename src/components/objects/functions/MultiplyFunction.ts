import { DOUBLE, INTEGER } from "../../../constants/DataTypes";
import { INTEGER_MULTIPLY } from "../../../constants/Functions";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { Expression } from "../expression/Expression";
import { EvaluationResult } from "../result/EvaluationResult";
import { BaseFunction } from "./BaseFunction";

export class MultiplyFunction extends BaseFunction {

    constructor(functionId: string) {
        super(functionId);
    }

    public evaluateFunction(inputs: Expression[], request: RequestCtx): EvaluationResult|null {
        var argValues: valueType[] = new Array(inputs.length);
        var result: EvaluationResult | null = this.evalArgs(inputs, request, argValues);
        
        if (result != null)
            return result;

        var mul: number = 1;
        for (let index = 0; index < argValues.length; index++) {
            let arg: number = <number>argValues[index];
            mul = mul * arg;
        }

        const dataType = this.functionId == INTEGER_MULTIPLY ? INTEGER : DOUBLE;
        result = new EvaluationResult(false, mul, dataType, null, null);
        return result;
    }


}