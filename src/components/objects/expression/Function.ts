class FunctionE implements Expression {
    private _functionId: string;

    constructor(functionId: string) {
        this._functionId = functionId;
    }

    public get functionId() {
        return this._functionId;
    }

    public set functionId(id: string) {
        this._functionId = id;
    }

    public execute(): void {
        
    }
}