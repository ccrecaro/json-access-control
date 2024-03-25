import { ObligationOrAdvice } from "./ObligationOrAdvice";
import { RequestCtx } from "./architecture/context/RequestCtx";
import { AttributeAssignment } from "./attribute/AttributeAssignment";
import { AttributeAssignmentExpression } from "./attribute/AttributeAssignmentExpression";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export class ObligationOrAdviceExpression {
    @JsonProperty({name: 'Id', required: true})
    private _id: string;
    @JsonProperty({name: 'FulfillOnOrAppliesTo', required: true})
    private _fulfillOnOrAppliesTo: effectType;
    @JsonProperty({name: 'AttributeAssignmentExpression', required: false})
    private _attributeAssignmentExpression?: AttributeAssignmentExpression[];

    constructor(id: string,
        fulfillOnOrAppliesTo: effectType,
        attributeAssignmentExpression?: AttributeAssignmentExpression[]) {

            this._id = id;
            this._fulfillOnOrAppliesTo = fulfillOnOrAppliesTo;
            this._attributeAssignmentExpression = attributeAssignmentExpression;
    }

    public get id() {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get fulfillOnOrAppliesTo() {
        return this._fulfillOnOrAppliesTo;
    }

    public set fulfillOnOrAppliesTo(fulfillOnOrAppliesTo: effectType) {
        this._fulfillOnOrAppliesTo = fulfillOnOrAppliesTo;
    }

    public getAttributeAssignmentExpression() {
        return this._attributeAssignmentExpression;
    }

    public set attributeAssignmentExpression(expressions: AttributeAssignmentExpression[]) {
        this._attributeAssignmentExpression = expressions;
    }

    public evaluate(request: RequestCtx): ObligationOrAdvice {
        var assignments: AttributeAssignment[] = [];
        if(this._attributeAssignmentExpression){
            for(let expression of this._attributeAssignmentExpression) {
                let assignmentSet = expression.evaluate(request);
                if(assignmentSet != null && assignmentSet.size > 0) {
                    assignmentSet.forEach((item: AttributeAssignment) => assignments.push(item))
                }
            }
        }
        return new ObligationOrAdvice(this._id, assignments);
    }
}