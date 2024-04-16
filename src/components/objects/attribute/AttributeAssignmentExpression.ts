import { RequestCtx } from "../architecture/context/RequestCtx";
import { Attribute } from "../expression/Attribute";
import { AttributeDesignator } from "../expression/AttributeDesignator";
import { Expression } from "../expression/Expression";
import { FunctionEx } from "../expression/FunctionEx";
import { VariableReference } from "../expression/VariableReference";
import { EvaluationResult } from "../result/EvaluationResult";
import { AttributeAssignment } from "./AttributeAssignment";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { setExpression } from "../../../utils/Functions/setExpression";
import { BaseExpression } from "../expression/BaseExpression";

@JsonObject()
export class AttributeAssignmentExpression {
    @JsonProperty({name: 'Expression', type: BaseExpression, required: true})
    private _expression: BaseExpression;
    @JsonProperty({name: 'Id', required: true})
    private _attributeId: string;
    @JsonProperty({name: 'Category', required: false})
    private _category?: string;
    @JsonProperty({name: 'Issuer', required: false})
    private _issuer?: string;

    constructor(expression: BaseExpression,
        attributeId: string,
        category?: string,
        issuer?: string) {
            //console.log(expression);
            this._expression = expression;
            this._attributeId = attributeId;
            this._category = category;
            this._issuer = issuer;
    }

    public get expression() {
        return this._expression;
    }

    public set expression(expression: BaseExpression) {
        this._expression = expression;
    }

    public get attributeId() {
        return this._attributeId;
    }

    public set attributeId(id: string) {
        this._attributeId = id;
    }

    public getCategory() {
        return this._category;
    }

    public set category(category: string) {
        this._category = category;
    }

    public getIssuer() {
        return this._issuer;
    }

    public set issuer(issuer: string) {
        this._issuer = issuer;
    }

    public evaluate(request: RequestCtx): Set<AttributeAssignment>|null {
        var values = new Set<AttributeAssignment>();
        var result: EvaluationResult|null = this._expression.evaluate(request);
        if(result == null || result.isIndeterminate){
            return null;
        }
        var attributeValue: valueType = result.value;

        if(attributeValue) {
            if(Array.isArray(attributeValue)) {
                if(attributeValue.length > 0) {
                    for(let value of attributeValue) {
                        let assignment: AttributeAssignment = new AttributeAssignment(this.attributeId, value, this._category, result.dataType, this._issuer);
                        values.add(assignment);
                    }
                } else {
                    return null;
                }
            } else {
                let assignment: AttributeAssignment = new AttributeAssignment(this.attributeId, attributeValue, this._category, result.dataType, this._issuer);
                values.add(assignment);
            }
        }
        return values;
    }

  
}