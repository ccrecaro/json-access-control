export declare class IdReference {
    private _id;
    private _version?;
    constructor(id: string, version: string);
    get id(): string;
    set id(id: string);
    getVersion(): string | undefined;
    set version(version: string);
}
