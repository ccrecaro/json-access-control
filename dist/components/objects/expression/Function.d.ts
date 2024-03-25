declare class FunctionE implements Expression {
    private _functionId;
    constructor(functionId: string);
    get functionId(): string;
    set functionId(id: string);
    execute(): void;
}
