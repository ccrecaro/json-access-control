import { Attribute } from "./expression/Attribute";
import { JsonObject, JsonProperty } from 'typescript-json-serializer';

@JsonObject()
export class Category {
    @JsonProperty({name: 'CategoryId', required: true})
    private _categoryId: string;
    
    @JsonProperty({name: 'Id', required: false})
    private _id?: string;
    
    @JsonProperty({name: 'Content', required: false})
    private _content?: string;
    
    @JsonProperty({name: 'Attribute',type: Attribute, required: false})
    private _attribute?: Attribute[];

    constructor(categoryId: string,
            id?: string,
            content?: string,
            attribute?: Attribute[]) {
        this._categoryId = categoryId;
        this._id = id;
        this._content = content;
        this._attribute = attribute;
    }

    public get categoryId() {
        return this._categoryId;
    }

    public set categoryId(id: string) {
        this._categoryId = id;
    }

    public getId() {
        return this._id; 
    }

    public set id(id: string) {
        this._id = id;
    }

    public getContent() {
        return this._content; 
    }

    public set content(content: string) {
        this._content = content;
    }

    public getAttribute() {
        return this._attribute; 
    }

    public set attribute(attribute: Attribute[]) {
        this._attribute = attribute;
    }

    public findAttribute(type: string, id: string, issuer: string, category: string): Attribute[] {
        var attributeResult: Attribute[] = [];
        if(this._categoryId == category && this._attribute) {
            for(let attribute of this._attribute) {
                if (attribute.isSearchedAttribute(type, id, issuer))
                    attributeResult.push(attribute);
            }
        }
        return attributeResult;
    }

}