import { DOUBLE, INTEGER } from "../../../constants/DataTypes";
import { INTEGER_DIVIDE } from "../../../constants/Functions";
import { valueType } from "../../../utils/types/valueType";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { Expression } from "../expression/Expression";
import { EvaluationResult } from "../result/EvaluationResult";
import { BaseFunction } from "./BaseFunction";

export class ModFunction extends BaseFunction {

    constructor(functionId: string) {
        super(functionId);
    }

    public evaluateFunction(inputs: Expression[], request: RequestCtx): EvaluationResult|null {
        var argValues: valueType[] = new Array(inputs.length);
        var result: EvaluationResult | null = this.evalArgs(inputs, request, argValues);
        
        if (result != null)
            return result;

        var arg0: number = <number>argValues[0];
        var arg1: number = <number>argValues[1];

        const dataType = this.functionId == INTEGER_DIVIDE ? INTEGER : DOUBLE;
        result = new EvaluationResult(false, arg0 % arg1, dataType, null, null);
        return result;
    }


}