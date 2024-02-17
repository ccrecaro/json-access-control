class AttributeSelector implements Expression{
    private _category: string;
    private _path: string;
    private _dataType: string;
    private _mustBePresent: boolean;
    private _contextSelectorId?: string;

    constructor(category: string,
        path: string,
        dataType: string,
        mustBePresent: boolean,
        contextSelectorId?: string) {

            this._category = category;
            this._path = path;
            this._dataType = dataType;
            this._mustBePresent = mustBePresent;
            this._contextSelectorId = contextSelectorId;
    }

    public get category() {
        return this._category;
    }

    public set category(category: string) {
        this._category = category;
    }

    public get path() {
        return this._path;
    }

    public set path(path: string) {
        this._path = path;
    }

    public get dataType() {
        return this._dataType;
    }

    public set dataType(dataType: string) {
        this._dataType = dataType;
    }

    public get mustBePresent() {
        return this._mustBePresent;
    }

    public set mustBePresent(mustBePresent: boolean) {
        this._mustBePresent = mustBePresent;
    }

    public getContextSelectorId() {
        return this._contextSelectorId;
    }

    public set contextSelectorId(id: string) {
        this._contextSelectorId = id;
    }

    public execute(): void {
        
    }
}