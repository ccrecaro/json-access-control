import { DATE_EQUAL, STRING_EQUAL } from "../../../constants/Functions";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { EqualFunction } from "../functions/EqualFunction";
import { EvaluationResult } from "../result/EvaluationResult";
import { Expression } from "./Expression";

export class FunctionEx implements Expression {
    private _functionId: string;

    constructor(functionId: string) {
        this._functionId = functionId;
    }


    public get functionId() {
        return this._functionId;
    }

    public set functionId(id: string) {
        this._functionId = id;
    }

    public execute(): void {
        
    }

    public evaluateFunction(inputs:Expression[]|undefined, request: RequestCtx): EvaluationResult|null {
        var fnc: FunctionEx;
        switch (this._functionId) {
            case STRING_EQUAL:
            case DATE_EQUAL:
                fnc = new EqualFunction(this._functionId);
                return fnc.evaluateFunction(inputs, request);
                //TODO: ASI CON TODOS
                //asdjaskdj
            default:
                return null;
        }
    }

    public evalArgs(inputs: Expression[], request: RequestCtx, args: valueType[]) {
        let i = 0;
        for(let input of inputs) {
            let result: EvaluationResult|null =  input.evaluate(request);
            if(result != null){
                if (result.isIndeterminate){
                    return result;
                }
    
                args[i] = result.value;
            }
            
        }

        //si todo sale bien, no retorna error
        return null;
    }

    //do nothing
    evaluate(request: RequestCtx): EvaluationResult|null {
        return null;
    }    
}