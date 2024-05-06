import { DOUBLE } from "../../../constants/DataTypes";
import { valueType } from "../../../utils/types/valueType";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { Expression } from "../expression/Expression";
import { EvaluationResult } from "../result/EvaluationResult";
import { BaseFunction } from "./BaseFunction";

export class RoundFunction extends BaseFunction {

    constructor(functionId: string) {
        super(functionId);
    }

    public evaluateFunction(inputs: Expression[], request: RequestCtx): EvaluationResult|null {
        var argValues: valueType[] = new Array(inputs.length);
        var result: EvaluationResult | null = this.evalArgs(inputs, request, argValues);
        
        if (result != null)
            return result;

        var arg: number = <number>argValues[0];

        result = new EvaluationResult(false, Math.round(arg), DOUBLE, null, null);
        return result;
    }

}