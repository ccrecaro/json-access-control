import { AttributeAssignment } from "./attribute/AttributeAssignment";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export class ObligationOrAdvice {
    @JsonProperty({name: 'Id', required: true})
    private _id: string;
    
    @JsonProperty({name: 'AttributeAssignment', type: AttributeAssignment, required: false})
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