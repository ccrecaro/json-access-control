class PolicyIssuer {
    private _content?: string;
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