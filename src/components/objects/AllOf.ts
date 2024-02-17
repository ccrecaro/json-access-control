class AllOf {
    private _match: MatchCreator[];

    constructor(match: MatchCreator[]) {
        this._match = match;
    }

    public get match() {
        return this._match;
    }

    public set match(match: MatchCreator[]) {
        this._match = match;
    }
}