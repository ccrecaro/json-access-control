class Category {
    private _categoryId: string;
    private _id?: string;
    private _content?: string;
    private _attribute?: Attribute;

    constructor(categoryId: string,
            id?: string,
            content?: string,
            attribute?: Attribute) {
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

    public set xPathVersion(attribute: Attribute) {
        this._attribute = attribute;
    }

}