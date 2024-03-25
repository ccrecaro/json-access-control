import { JsonObject, JsonProperty } from 'typescript-json-serializer';
import { Attribute } from './expression/Attribute';

@JsonObject()
export class PolicyIssuer {
    @JsonProperty({name: 'Content', required: false})
    private _content?: string;
    @JsonProperty({name: 'Attribute', required: false})
    private _attribute?: Attribute[];

    constructor(content?: string, attribute?: Attribute[]) {
        this._content = content;
        this._attribute = attribute;
    }

    public getContent() {
        return this._content; 
    }

    public set content(content: string) {
        this._content = content;
    }

    public getAttribute() {
        return this.attribute; 
    }

    public set attribute(attribute: Attribute[]) {
        this._attribute = attribute;
    }
}