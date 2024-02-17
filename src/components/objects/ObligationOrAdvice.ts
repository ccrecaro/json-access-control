class ObligationOrAdvice {
    private _id: string;
    private _attributeAssignment?: AttributeAssignment[];

    constructor(id: string, attributeAssignment: AttributeAssignment[]) {
        this._id = id;
        this._attributeAssignment = attributeAssignment;
    }

    public get id() {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public getAttributeAssignment() {
        return this._attributeAssignment;
    }

    public set attributeAssignment(attributeAssignments: AttributeAssignment[]) {
        this._attributeAssignment = attributeAssignments;
    }
}