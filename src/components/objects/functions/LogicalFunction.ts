import { BOOLEAN } from "../../../constants/DataTypes";
import { AND, OR } from "../../../constants/Functions";
import { valueType } from "../../../utils/types/valueType";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { Expression } from "../expression/Expression";
import { EvaluationResult } from "../result/EvaluationResult";
import { BaseFunction } from "./BaseFunction";

export class LogicalFunction extends BaseFunction {

    constructor(functionId: string) {
        super(functionId);
    }

    public evaluateFunction(inputs: Expression[], request: RequestCtx): EvaluationResult|null {
        for (let input of inputs) {
            let result: EvaluationResult | null = input.evaluate(request);
            if(result){
                if (result.isIndeterminate) {
                    return result;
                }
    
                let value: valueType = result.value;

                switch(this.functionId) {
                    case OR:
                        return new EvaluationResult(false, true, BOOLEAN, null, null);
                    case AND:
                        return new EvaluationResult(false, false, BOOLEAN, null, null);
                }
            }
        }

        if (this.functionId == OR)
            return new EvaluationResult(false, false, BOOLEAN, null, null);
        else
            return new EvaluationResult(false, true, BOOLEAN, null, null);
    }
}