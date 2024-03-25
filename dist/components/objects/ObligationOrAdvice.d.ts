import { AttributeAssignment } from "./attribute/AttributeAssignment";
export declare class ObligationOrAdvice {
    private _id;
    private _attributeAssignment?;
    constructor(id: string, attributeAssignment: AttributeAssignment[]);
    get id(): string;
    set id(id: string);
    getAttributeAssignment(): AttributeAssignment[] | undefined;
    set attributeAssignment(attributeAssignments: AttributeAssignment[]);
}
