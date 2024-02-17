class VariableReference implements Expression {
    private _variableId: string;

    constructor(variableId: string) {
        this._variableId = variableId;
    }

    public get functionId() {
        return this._variableId;
    }

    public set functionId(id: string) {
        this._variableId = id;
    }

    public execute(): void {
        
    }
}