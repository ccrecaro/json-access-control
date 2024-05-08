import { JsonObject, JsonProperty } from "typescript-json-serializer";
import { Attribute } from "./Attribute";
import { AttributeDesignator } from "./AttributeDesignator";
import { FunctionEx } from "./FunctionEx";
import { VariableReference } from "./VariableReference";
import { setExpression } from "../../../utils/Functions/setExpression";
import { Expression } from "./Expression";
import { RequestCtx } from "../architecture/context/RequestCtx";
import { EvaluationResult } from "../result/EvaluationResult";
import { Apply } from "./Apply";

@JsonObject()
export class BaseExpression{
    @JsonProperty({name: 'Apply', type: Apply, required: false})
    private _apply?: Apply;

    @JsonProperty({name: 'Attribute', type: Attribute, required: false})
    private _attribute?: Attribute;

    @JsonProperty({name: 'AttributeDesignator', type: AttributeDesignator, required: false})
    private _attributeDesignator?: AttributeDesignator;

    @JsonProperty({name: 'FunctionEx', type: FunctionEx, required: false})
    private _functionEx?: FunctionEx;

    @JsonProperty({name: 'VariableReference', type: VariableReference, required: false})
    private _variableReference?: VariableReference;

    constructor(apply: Apply,
        attribute: Attribute, 
        attributeDesignator: AttributeDesignator,
        functionEx: FunctionEx,
        variableReference: VariableReference){
        if(apply) this._apply = apply;
        if(attribute) this._attribute = attribute;
        if(attributeDesignator) this._attributeDesignator = attributeDesignator;
        if(functionEx) this._functionEx = functionEx;
        if(variableReference) this._variableReference = variableReference;
    }

    evaluate(request: RequestCtx): EvaluationResult | null {
        if(this._apply) return this._apply.evaluate(request);
        if(this._attribute) return this._attribute.evaluate(request);
        if(this._attributeDesignator) return this._attributeDesignator.evaluate(request);
        if(this._functionEx) return this._functionEx.evaluate(request);
        if(this._variableReference) return this._variableReference.evaluate(request);
        return null; //no deberia llegar aqui
    }
}