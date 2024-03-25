import { Status } from "./Status";
export declare class StatusCode {
    private _value?;
    private _subStatusCode?;
    constructor(value?: string, subStatusCode?: Status[]);
    getValue(): string | undefined;
    set value(value: string);
    getSubStatusCode(): Status[] | undefined;
    set subStatusCode(subStatusCode: Status[]);
}
