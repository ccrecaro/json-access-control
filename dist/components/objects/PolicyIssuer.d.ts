import { Attribute } from './expression/Attribute';
export declare class PolicyIssuer {
    private _content?;
    private _attribute?;
    constructor(content?: string, attribute?: Attribute[]);
    getContent(): string | undefined;
    set content(content: string);
    getAttribute(): Attribute[];
    set attribute(attribute: Attribute[]);
}
