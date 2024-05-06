import { DOUBLE, INTEGER } from "../../../constants/DataTypes";
import { INTEGER_ADD } from "../../../constants/Functions";
import { valueType } from "../../../utils/types/valueType";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { Expression } from "../expression/Expression";
import { EvaluationResult } from "../result/EvaluationResult";
import { BaseFunction } from "./BaseFunction";

export class AddFunction extends BaseFunction {

    constructor(functionId: string) {
        super(functionId);
    }

    public evaluateFunction(inputs: Expression[], request: RequestCtx): EvaluationResult|null {
        var argValues: valueType[] = new Array(inputs.length);
        var result: EvaluationResult | null = this.evalArgs(inputs, request, argValues);
        
        if (result != null)
            return result;

        var sum: number = 0;
        for (let index = 0; index < argValues.length; index++) {
            let arg: number = <number>argValues[index];
            sum += arg;
        }

        const dataType = this.functionId == INTEGER_ADD ? INTEGER : DOUBLE;
        result = new EvaluationResult(false, sum, dataType, null, null);
        return result;
    }


}