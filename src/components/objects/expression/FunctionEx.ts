import { AND, ANY_URI_EQUAL, BASE64_BINARY_EQUAL, BOOLEAN_EQUAL, DATETIME_EQUAL, DATE_EQUAL, DAYTIME_DURATION_EQUAL, DOUBLE_ABS, DOUBLE_ADD, DOUBLE_DIVIDE, DOUBLE_EQUAL, DOUBLE_SUBTRACT, DOUBLE_TO_INTEGER, DUOBLE_MULTIPLY, FLOOR, HEX_BINARY_EQUAL, INTEGER_ABS, INTEGER_ADD, INTEGER_DIVIDE, INTEGER_EQUAL, INTEGER_MOD, INTEGER_MULTIPLY, INTEGER_SUBTRACT, INTEGER_TO_DOUBLE, OR, RFC822NAME_EQUAL, ROUND, STRING_EQUAL, STRING_EQUAL_IGNORE_CASE_EQUAL, STRING_NORMALIZE_SPACE, STRING_NORMALIZE_TO_LOWER_CASE, TIME_EQUAL, X500NAME_EQUAL, YEAR_MONTH_DURATION_EQUAL } from "../../../constants/Functions";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { AbsFunction } from "../functions/AbsFunction";
import { AddFunction } from "../functions/AddFunction";
import { BaseFunction } from "../functions/BaseFunction";
import { DivideFunction } from "../functions/DivideFunction";
import { EqualFunction } from "../functions/EqualFunction";
import { FloorFunction } from "../functions/FloorFunction";
import { LogicalFunction } from "../functions/LogicalFunction";
import { ModFunction } from "../functions/ModFunction";
import { MultiplyFunction } from "../functions/MultiplyFunction";
import { NumericConvertionFunction } from "../functions/NumericConvertionFunction";
import { RoundFunction } from "../functions/RoundFunction";
import { StringNormalizeFunction } from "../functions/StringNormalizeFunction";
import { SubFunction } from "../functions/SubFunction";
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

    private EqualFunctionsId = [STRING_EQUAL, STRING_EQUAL_IGNORE_CASE_EQUAL, DATE_EQUAL, BOOLEAN_EQUAL, INTEGER_EQUAL, DOUBLE_EQUAL, DATE_EQUAL, TIME_EQUAL,
                            DATETIME_EQUAL, DAYTIME_DURATION_EQUAL, YEAR_MONTH_DURATION_EQUAL, ANY_URI_EQUAL, X500NAME_EQUAL, RFC822NAME_EQUAL, HEX_BINARY_EQUAL, BASE64_BINARY_EQUAL];

    private AddFunctionId = [INTEGER_ADD, DOUBLE_ADD];
    
    private SubFunctionId = [INTEGER_SUBTRACT, DOUBLE_SUBTRACT];

    private MultiplyFunctionId = [INTEGER_MULTIPLY, DUOBLE_MULTIPLY];

    private DivideFunctionId = [INTEGER_DIVIDE, DOUBLE_DIVIDE];

    private ModFunctionId = [INTEGER_MOD];

    private AbsFunctionId = [INTEGER_ABS, DOUBLE_ABS];

    private FloorFunctionId = [FLOOR];

    private RoundFunctionId = [ROUND];

    private StringNormalizeFunctionId = [STRING_NORMALIZE_SPACE, STRING_NORMALIZE_TO_LOWER_CASE];

    private NumericConvertionFunctionId = [DOUBLE_TO_INTEGER, INTEGER_TO_DOUBLE];

    private LogicalFunctionId = [OR, AND];

    public execute(): void {
        
    }

    public evaluateFunction(inputs:Expression[]|undefined, request: RequestCtx): EvaluationResult|null {
        var fnc: BaseFunction;
        if (this.EqualFunctionsId.includes(this._functionId)) {
            fnc = new EqualFunction(this._functionId);
        } else if (this.AddFunctionId.includes(this._functionId)) {
            fnc = new AddFunction(this._functionId);
        } else if (this.SubFunctionId.includes(this._functionId)) {
            fnc = new SubFunction(this._functionId);
        } else if (this.MultiplyFunctionId.includes(this._functionId)) {
            fnc = new MultiplyFunction(this._functionId);
        } else if (this.DivideFunctionId.includes(this._functionId)) {
            fnc = new DivideFunction(this._functionId);
        } else if (this.ModFunctionId.includes(this._functionId)) {
            fnc = new ModFunction(this._functionId);
        } else if (this.AbsFunctionId.includes(this._functionId)) {
            fnc = new AbsFunction(this._functionId);
        } else if (this.RoundFunctionId.includes(this._functionId)) {
            fnc = new RoundFunction(this._functionId);
        } else if (this.FloorFunctionId.includes(this._functionId)) {
            fnc = new FloorFunction(this._functionId);
        } else if (this.StringNormalizeFunctionId.includes(this._functionId)) {
            fnc = new StringNormalizeFunction(this._functionId);
        } else if (this.NumericConvertionFunctionId.includes(this._functionId)) {
            fnc = new NumericConvertionFunction(this._functionId);
        } else if (this.LogicalFunctionId.includes(this._functionId)) {
            fnc = new LogicalFunction(this._functionId);
        } else {
            return null;
        }
        return fnc.evaluateFunction(inputs, request);

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