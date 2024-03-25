import { RequestCtx } from "../architecture/context/RequestCtx";
import { Expression } from "../expression/Expression";
import { AttributeAssignment } from "./AttributeAssignment";
export declare class AttributeAssignmentExpression {
    private _expression;
    private _attributeId;
    private _category?;
    private _issuer?;
    constructor(expression: Expression, attributeId: string, category?: string, issuer?: string);
    get expression(): Expression;
    set expression(expression: Expression);
    get attributeId(): string;
    set attributeId(id: string);
    getCategory(): string | undefined;
    set category(category: string);
    getIssuer(): string | undefined;
    set issuer(issuer: string);
    evaluate(request: RequestCtx): Set<AttributeAssignment> | null;
}
