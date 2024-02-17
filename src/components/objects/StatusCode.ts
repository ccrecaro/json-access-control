class StatusCode {
    private _value?: string;
    private _subStatusCode?: Status[];

    constructor(value?: string, subStatusCode?: Status[]) {
        this._value = value;
        this._subStatusCode = subStatusCode;
    }

    public getValue() {
        return this._value;
    }

    public set value(value: string) {
        this._value = value;
    }

    public getSubStatusCode() {
        return this._subStatusCode;
    }

    public set subStatusCode(subStatusCode: Status[]) {
        this._subStatusCode = subStatusCode;
    }
}