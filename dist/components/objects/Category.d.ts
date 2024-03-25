import { Attribute } from "./expression/Attribute";
export declare class Category {
    private _categoryId;
    private _id?;
    private _content?;
    private _attribute?;
    constructor(categoryId: string, id?: string, content?: string, attribute?: Attribute[]);
    get categoryId(): string;
    set categoryId(id: string);
    getId(): string | undefined;
    set id(id: string);
    getContent(): string | undefined;
    set content(content: string);
    getAttribute(): Attribute[] | undefined;
    set attribute(attribute: Attribute[]);
    findAttribute(type: string, id: string, issuer: string, category: string): Attribute[];
}
