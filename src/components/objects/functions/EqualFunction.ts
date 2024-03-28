import { STRING_EQUAL_IGNORE_CASE_EQUAL } from "../../../constants/Functions";
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
        console.log("Equal function evaluate: ");
        console.log(argValues);
        var evalResult: boolean = false;
        
        if (result != null)
            return result;

        if(typeof argValues[1] === "string" && argValues[1] === "Any") {
            return new EvaluationResult(false, true, "boolean", null, null);
        }

        if(this.functionId == STRING_EQUAL_IGNORE_CASE_EQUAL){
            evalResult = argValues[0].toString().toLowerCase() === argValues[1].toString().toLowerCase();
        }  else {
            evalResult = argValues[0] === argValues[1];
        }
        return new EvaluationResult(false, evalResult, "boolean", null, null);

    }


}