import { ObligationOrAdvice } from "./ObligationOrAdvice";
import { RequestCtx } from "./architecture/context/RequestCtx";
import { AttributeAssignmentExpression } from "./attribute/AttributeAssignmentExpression";
export declare class ObligationOrAdviceExpression {
    private _id;
    private _fulfillOnOrAppliesTo;
    private _attributeAssignmentExpression?;
    constructor(id: string, fulfillOnOrAppliesTo: effectType, attributeAssignmentExpression?: AttributeAssignmentExpression[]);
    get id(): string;
    set id(id: string);
    get fulfillOnOrAppliesTo(): effectType;
    set fulfillOnOrAppliesTo(fulfillOnOrAppliesTo: effectType);
    getAttributeAssignmentExpression(): AttributeAssignmentExpression[] | undefined;
    set attributeAssignmentExpression(expressions: AttributeAssignmentExpression[]);
    evaluate(request: RequestCtx): ObligationOrAdvice;
}
