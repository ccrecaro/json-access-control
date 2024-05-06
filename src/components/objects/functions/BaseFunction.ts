import { STATUS_PROCESSING_ERROR } from "../../../constants/Status";
import { valueType } from "../../../utils/types/valueType";
import { Status } from "../Status";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { AttributeDesignator } from "../expression/AttributeDesignator";
import { Expression } from "../expression/Expression";
import { EvaluationResult } from "../result/EvaluationResult";

export abstract class BaseFunction {
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

    public evalArgs(inputs: Expression[], request: RequestCtx, args: valueType[]): EvaluationResult|null {
        var i = 0;
        let result: EvaluationResult|null = null;
        var ar = []
        for(let input of inputs) {            
            if(input instanceof AttributeDesignator){
                result =  input.evaluate(request);

                if(result != null){
                    if (result.isIndeterminate){
                        return result;
                    }
                    let resultValue = result.value;
                    args[i] = Array.isArray(resultValue) ? resultValue[0] : resultValue;
                    i++;
                    continue;  
                }
            }   
            args[i] = input;
            i++;
        }

        //si todo sale bien, no retorna error
        return null;
    }

    abstract evaluateFunction(inputs: Expression[]|undefined, request: RequestCtx): EvaluationResult|null;

    protected makeProcessingError(message: String): EvaluationResult {
        var errStatus: Status = new Status(STATUS_PROCESSING_ERROR);
        var processingError: EvaluationResult = new EvaluationResult(true, null, "", errStatus, null);

        return processingError;
    }
}