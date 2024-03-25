"use strict";
class Bag {
    constructor(values) {
        this._values = values;
    }
    get values() {
        return this._values;
    }
    isBagEmpty() {
        return this._values.length === 0;
    }
}
//# sourceMappingURL=Bag.js.map