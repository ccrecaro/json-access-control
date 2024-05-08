import { DOUBLE, INTEGER } from "../../../constants/DataTypes";
import { INTEGER_DIVIDE } from "../../../constants/Functions";
import { valueType } from "../../../utils/types/valueType";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { Expression } from "../expression/Expression";
import { EvaluationResult } from "../result/EvaluationResult";
import { BaseFunction } from "./BaseFunction";

export class DivideFunction extends BaseFunction {

    constructor(functionId: string) {
        super(functionId);
    }

    public evaluateFunction(inputs: Expression[], request: RequestCtx): EvaluationResult|null {
        var argValues: valueType[] = new Array(inputs.length);
        var result: EvaluationResult | null = this.evalArgs(inputs, request, argValues);
        
        if (result != null)
            return result;

        var dividend: number = <number>argValues[0];
        var divisor: number = <number>argValues[1];

        if (divisor == 0) {            
            return this.makeProcessingError("divide by zero");
        }

        var quotient: number = dividend / divisor;
        const dataType = this.functionId == INTEGER_DIVIDE ? INTEGER : DOUBLE;
        result = new EvaluationResult(false, quotient, dataType, null, null);
        return result;
    }


}