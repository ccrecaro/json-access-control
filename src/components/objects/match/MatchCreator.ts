abstract class MatchCreator {
    private _matchId: string;
    private _value?: valueType;
    private _dataType?: string;
    private _xPathCategory?: string;

    constructor(matchId: string,
        value?: valueType,
        dataType?: string,
        xPathCategory?: string) {
            this._matchId = matchId;
            this._value = value;
            this._dataType = dataType;
            this._xPathCategory = xPathCategory;
    }

    public get matchId() {
        return this._matchId;
    }

    public set matchId(id: string) {
        this._matchId = id;
    }

    public getValue() {
        return this._value;
    }

    public set value(value: valueType) {
        this._value = value;
    }

    public getDataType() {
        return this._dataType;
    }

    public set dataType(dataType: string) {
        this._dataType = dataType
    }

    public getXPathCategory() {
        return this._xPathCategory;
    }

    public set xPathCategory(xPathCategory: string) {
        this._xPathCategory = xPathCategory;
    }
}