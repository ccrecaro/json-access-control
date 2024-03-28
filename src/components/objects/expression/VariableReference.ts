import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { VariableDefinition } from '../VariableDefinition';
import { Expression } from './Expression';
import { RequestCtx } from '../architecture/context/RequestCtx';
import { EvaluationResult } from '../result/EvaluationResult';

@JsonObject()
export class VariableReference implements Expression {
    @JsonProperty({name: 'VariableId', required: true})
    private _variableId: string;
    @JsonProperty({name: 'Definition', type: VariableDefinition, required: false})
    private _definition: VariableDefinition|null = null;

    constructor(variableId: string, definition: VariableDefinition|null = null) {
        this._variableId = variableId;
        this._definition = definition;
    }

    public get functionId() {
        return this._variableId;
    }

    public set functionId(id: string) {
        this._variableId = id;
    }

    public evaluate(request: RequestCtx): EvaluationResult|null {
        return null;
    }

    /*
    public evaluate(request: RequestCtx): EvaluationResult|null {
        Expression xpr = getReferencedDefinition().getExpression();
        return ((Evaluatable) xpr).evaluate(context);
    }

    public getReferencedDefinition(): VariableDefinition {
        // if this was created with a concrete definition, then that's what
        // we return, otherwise we query the manager (if we have one)
        if (this._definition != null) {
            return this._definition;
        } else if (manager != null) {
            return manager.getDefinition(variableId);
        }

        // if the simple constructor was used, then we have nothing
        return null;
    }
    */

}