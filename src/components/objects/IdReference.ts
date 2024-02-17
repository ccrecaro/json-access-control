class IdReference {
    private _id: string;
    private _version?: string;

    constructor(id: string, version: string) {
        this._id = id;
        this._version = version;
    }

    public get id(){
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public getVersion() {
        return this._version;
    }

    public set version(version: string) {
        this._version = version;
    }
}