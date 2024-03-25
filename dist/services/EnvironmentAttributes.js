"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentAttributes = void 0;
const Attributes_1 = require("../constants/Attributes");
class EnvironmentAttributes {
    setEnvironmentDate(identifier) {
        const date = new Date();
        switch (identifier) {
            case Attributes_1.CURRENT_TIME:
                console.log(date.toTimeString());
                return date.getTime();
            case Attributes_1.CURRENT_DATE:
                console.log(date.toDateString());
                return date.getDate();
            case Attributes_1.CURRENT_DATETIME:
                console.log(date.toString());
                return date;
        }
    }
}
exports.EnvironmentAttributes = EnvironmentAttributes;
//# sourceMappingURL=EnvironmentAttributes.js.map