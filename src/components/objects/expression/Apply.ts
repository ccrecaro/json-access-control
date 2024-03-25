import { RequestCtx } from "../architecture/context/RequestCtx";
import { EvaluationResult } from "../result/EvaluationResult";
import { Expression } from "./Expression";
import { FunctionEx } from "./FunctionEx";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export class Apply implements Expression {
    @JsonProperty({name: 'FunctionId', required: true})
    private _functionId: string;
    @JsonProperty({name: 'Description', required: false})
    private _description?: string;
    @JsonProperty({name: 'Expression', required: false})
    private _expression?: Expression[];

    constructor(functionId: string,
        description?: string,
        expression?: Expression[]) {

            this._functionId = functionId;
            this._description = description;
            this._expression = expression;
    }

    public get functionId() {
        return this._functionId;
    }

    public set functionId(id: string) {
        this._functionId = id;
    }

    public getDescription() {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }

    public getExpression() {
        return this._expression;
    }

    public set expression(expressions: Expression[]) {
        this._expression = expressions;
    }

    public evaluate(request: RequestCtx): EvaluationResult|null {
        var fnc: FunctionEx = new FunctionEx(this._functionId);
        return fnc.evaluateFunction(this._expression, request);
    }
}