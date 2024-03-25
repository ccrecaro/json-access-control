declare class AllOf {
    private _match;
    constructor(match: MatchCreator[]);
    get match(): MatchCreator[];
    set match(match: MatchCreator[]);
}
