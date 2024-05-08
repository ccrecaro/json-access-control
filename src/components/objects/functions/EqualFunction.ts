import { STRING_EQUAL_IGNORE_CASE_EQUAL } from "../../../constants/Functions";
import { valueType } from "../../../utils/types/valueType";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { Expression } from "../expression/Expression";
import { EvaluationResult } from "../result/EvaluationResult";
import { BaseFunction } from "./BaseFunction";

export class EqualFunction extends BaseFunction {

    constructor(functionId: string) {
        super(functionId);
    }

    public evaluateFunction(inputs: Expression[], request: RequestCtx): EvaluationResult|null {
        var argValues: valueType[] = new Array(inputs.length);
        var result: EvaluationResult | null = this.evalArgs(inputs, request, argValues);
        var evalResult: boolean = false;
        
        if (result != null)
            return result;


        if(argValues[0] && argValues[1]){
            if(this.functionId == STRING_EQUAL_IGNORE_CASE_EQUAL){
                evalResult = argValues[0].toString().toLowerCase() === argValues[1].toString().toLowerCase();
            }  else {
                evalResult = argValues[0].toString() == argValues[1].toString();
            }
        }
        return new EvaluationResult(false, evalResult, "boolean", null, null);

    }


}